export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export type ProjectsContextType = {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

export type WorksSectionProps = {
  isAdmin?: boolean;
  onEdit?: (item: Project) => unknown;
  onDelete?: (item: Project) => unknown;
};
