import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
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

export const ErrorText = styled.p`
  color: red;
  margin: 0;
`;
