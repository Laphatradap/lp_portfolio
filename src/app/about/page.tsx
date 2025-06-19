"use client";
import Image from "next/image";
import { Header } from "@/components";
import { StyledAboutContainer, StyledDescription } from "./About.sc";

export default function AboutPage() {
  return (
    <section>
      <Header copy="<Coder />" />
      <StyledAboutContainer>
        <StyledDescription>
          <p>
            Hi, I am Laphat — a Front-End Developer passionate about building
            web apps that simplify life. I blend JavaScript, React, and agile
            thinking to create smart, user-focused solutions.
          </p>
        </StyledDescription>
        <Image
          src="/images/lp-with-laptop.jpg"
          alt="a coder doing coding"
          width={750}
          height={500}
        />
      </StyledAboutContainer>
    </section>
  );
}
