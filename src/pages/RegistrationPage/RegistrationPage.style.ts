import styled from "styled-components";

export const StyleRegistrationPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  
  form {
    display: flex;
    flex-direction: column;
    width: 300px; // Устанавливаем фиксированную ширину формы
  }

  input {
    margin-bottom: 16px; // Отступ между инпутами
  }

  button {
    background-color: #007bff; // Цвет кнопки
    color: white; // Цвет текста кнопки
    cursor: pointer; // Курсор при наведении
  }
`;
