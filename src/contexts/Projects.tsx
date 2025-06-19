"use client";
import { Project, ProjectsContextType } from "@/interfaces";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/projects` as string;

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
}
