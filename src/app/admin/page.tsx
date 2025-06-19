"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useProjects } from "@/contexts/Projects";
import { Header, AdminLogin, WorksSection } from "@/components";
import {
  StyledAdminPanel,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledImg,
} from "./Admin.sc";
import { Project } from "@/interfaces";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/projects` as string;

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);

  const { projects, setProjects } = useProjects();
  const [form, setForm] = useState({ title: "", description: "", image: "" });
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Allow scrolling on admin page
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    return () => {
      // Restore overflow hidden when leaving admin page
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      // Optionally show preview
      const reader = new FileReader();
      reader.onload = (ev) => {
        setForm((prev) => ({ ...prev, image: ev.target?.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  async function uploadToUploadcare(file: File): Promise<string> {
    const publicKey = process.env.NEXT_PUBLIC_UPLOAD_CARE_KEY as string;
    const formData = new FormData();
    formData.append("UPLOADCARE_STORE", "1");
    formData.append("UPLOADCARE_PUB_KEY", publicKey);
    formData.append("file", file);

    const res = await fetch("https://upload.uploadcare.com/base/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return `https://ucarecdn.com/${data.file}/`;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);

    let imageUrl = form.image;

    if (file) {
      imageUrl = await uploadToUploadcare(file);
    }

    const payload = { ...form, image: imageUrl };

    if (editingId) {
      // Edit project
      const res = await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const updated = await res.json();
      setProjects(projects.map((p) => (p.id === editingId ? updated : p)));
      setEditingId(null);
    } else {
      // Add project
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const created = await res.json();
      setProjects([...projects, created]);
    }
    setForm({ title: "", description: "", image: "" });
    setFile(null);
    setLoading(false);
  };

  const handleEdit = (project: Project) => {
    setForm({
      title: project.title,
      description: project.description,
      image: project.image || "",
    });
    setFile(null);
    setEditingId(project.id);
  };

  const handleDelete = async (project: Project) => {
    setLoading(true);

    const { id } = project;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setProjects(projects.filter((p) => p.id !== id));

    if (editingId === id) {
      setForm({ title: "", description: "", image: "" });
      setEditingId(null);
      setFile(null);
    }

    setLoading(false);
  };

  if (!loggedIn) return <AdminLogin onSuccess={() => setLoggedIn(true)} />;

  return (
    <section>
      <Header copy="Workspace" />
      <StyledAdminPanel>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <StyledTextarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
          />
          <StyledInput
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {form.image && <StyledImg src={form.image} alt="Preview" />}
          <StyledButton type="submit" disabled={loading}>
            {editingId ? "Update project" : "Add new project"}
          </StyledButton>
          {editingId && (
            <StyledButton
              type="button"
              onClick={() => {
                setForm({ title: "", description: "", image: "" });
                setEditingId(null);
                setFile(null);
              }}
            >
              Cancel
            </StyledButton>
          )}
        </StyledForm>

        {loading && <p>Loading...</p>}
      </StyledAdminPanel>
      <WorksSection isAdmin onEdit={handleEdit} onDelete={handleDelete} />
    </section>
  );
}
