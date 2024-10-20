import styled from "styled-components";

export const StyleForgotPasswordPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 50px auto;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
