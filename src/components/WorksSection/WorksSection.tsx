"use client";
import { useProjects } from "@/contexts/Projects";
import { useRef } from "react";
import { Header } from "@/components";
import {
  StyledWorksContainer,
  StyledWorksList,
  StyledWorks,
  StyledImageContainer,
  StyledButton,
} from "./WorksSection.sc";
import { WorksSectionProps } from "@/interfaces";

const WorksSection = ({
  isAdmin,
  onEdit = () => {},
  onDelete = () => {},
}: WorksSectionProps) => {
  const { projects } = useProjects();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  if (!projects) return;

  return (
    <section>
      {!isAdmin && <Header copy="Works" />}
      <StyledWorksContainer ref={scrollRef} onWheel={onWheel}>
        <StyledWorksList>
          {projects.map((item) => (
            <StyledWorks key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <StyledImageContainer>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} />
              </StyledImageContainer>
              {isAdmin && (
                <div>
                  <StyledButton onClick={() => onEdit(item)}>Edit</StyledButton>
                  <StyledButton
                    onClick={() => onDelete(item)}
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Delete
                  </StyledButton>
                </div>
              )}
            </StyledWorks>
          ))}
        </StyledWorksList>
      </StyledWorksContainer>
    </section>
  );
};
export default WorksSection;
