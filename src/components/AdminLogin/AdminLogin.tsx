"use client";
import React, { useState } from "react";
import { Header } from "@/components";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  ErrorText,
} from "./AdminLogin.sc";

type AdminLoginProps = {
  onSuccess: () => void;
};

const AdminLogin = ({ onSuccess }: AdminLoginProps) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // for testing purpose only
    if (form.username === "admin" && form.password === "test123") {
      setError("");
      onSuccess();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section>
      <Header copy="Admin" />
      <StyledForm onSubmit={handleLogin}>
        <StyledInput
          name="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <StyledInput
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <StyledButton type="submit">Login</StyledButton>
        {error && <ErrorText>{error}</ErrorText>}
      </StyledForm>
    </section>
  );
};

export default AdminLogin;
