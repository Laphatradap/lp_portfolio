import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

export const StyledNavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  text-transform: uppercase;
  font-style: italic;
`;

export const StyledNavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
`;
