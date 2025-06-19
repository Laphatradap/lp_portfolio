import styled from "styled-components";

export const StyledWorksContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  flex-wrap: nowrap;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledWorksList = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledWorks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledImageContainer = styled.div`
  width: 350px;
  height: 450px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid gray;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
`;
