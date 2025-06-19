import styled from "styled-components";

export const StyledAdminPanel = styled.div`
  max-width: 600px;
  margin: 2rem auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 60rem;
  margin: 2rem auto 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const StyledWorksPanelContainer = styled.div`
  display: flex;
`;
