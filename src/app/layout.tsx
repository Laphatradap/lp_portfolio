import type { Metadata } from "next";
import "./globals.css";
import { ProjectsProvider } from "@/contexts/Projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "lphusri portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <ProjectsProvider>
          <main className={styles.page}>{children}</main>
        </ProjectsProvider>
      </body>
    </html>
  );
}
