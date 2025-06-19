"use client";
import Link from "next/link";
import {
  StyledNavbarContainer,
  StyledNavbar,
  StyledNavbarLogo,
  StyledNavbarItems,
} from "./Navbar.sc";

const Navbar = () => {
  const navbarItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin" },
  ];

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <StyledNavbarLogo onClick={handleLogoClick}>
          Laphatrada
        </StyledNavbarLogo>
        <StyledNavbarItems>
          {navbarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </StyledNavbarItems>
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};
export default Navbar;
