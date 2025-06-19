"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Header } from "@/components";
import { StyledContacts, StyledSocials } from "./Contact.sc";

export default function contactPage() {
  const iconSize = 60;

  return (
    <section>
      <Header copy="Connect" />
      <StyledContacts>
        <StyledSocials>
          <div>
            <a href="mailto:laphatradap@disroot.org">
              <HiOutlineMail size={iconSize} />
            </a>
          </div>
          <div>
            <a href="https://github.com/laphatradap">
              <FaGithub size={iconSize} />
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/laphatradap">
              <FaLinkedin size={iconSize} />
            </a>
          </div>
        </StyledSocials>
        <Image
          src="/images/rubber-duck.jpg"
          alt="a yellow rubber duck"
          width={750}
          height={500}
        />
      </StyledContacts>
    </section>
  );
}
