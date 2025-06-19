"use client";
import { StyledHeaderContainer } from "./Header.sc";

type HeaderProps = {
  copy: string;
};

const Header = ({ copy }: HeaderProps) => {
  return (
    <StyledHeaderContainer>
      <h2>{copy}</h2>
    </StyledHeaderContainer>
  );
};

export default Header;
