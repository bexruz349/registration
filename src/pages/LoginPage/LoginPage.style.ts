import styled from "styled-components";

export const StyleLoginPage = styled.div`
  box-shadow: 0 0 10px ${props => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${props => props.theme.colors.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${props => props.theme.colors.disabledBgc};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${props => props.theme.colors.primeColor};
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
  }

  .button-group {
    display: flex;
    justify-content: space-between; /* Распределяет пространство между кнопками */
    margin-top: 20px; /* Отступ сверху для разделения с формой */
    width: 100%; /* Обеспечивает заполнение ширины родителя */
  }

  .button-group a {
    display: inline-block; /* Делает ссылку блочной */
    padding: 10px 15px; /* Отступы для "кнопки" */
    background-color: ${props => props.theme.colors.primeColor}; /* Цвет фона кнопки */
    color: white; /* Цвет текста */
    border-radius: 5px; /* Скругление углов */
    text-align: center; /* Центрирование текста */
    text-decoration: none; /* Убирает подчеркивание */
    transition: background-color 0.3s; /* Плавный переход для эффекта наведения */
    width: 48%; /* Устанавливаем ширину кнопки */
  }

  .button-group a:hover {
    background-color: ${props => props.theme.colors.primeColor}; /* Цвет фона при наведении */
  }

  @media (max-width: 530px) {
    width: 100%;
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .reg__link {
    flex: 0 0 58px;
    transition: 200ms;

    &:hover {
      scale: 1.1;
    }

    &:active {
      scale: 0.9;
      transition: 100ms;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
