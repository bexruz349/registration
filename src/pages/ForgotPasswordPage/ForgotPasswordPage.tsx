
// import { Heading } from "../../components/Typography/Heading";
// import { LinkText } from "../../components/Typography/LinkText";
// import { Container } from "../../components/UI/Container/Container.style";
// import { Input } from "../../components/UI/input/input";
// import { StyleForgotPasswordPage, StyledButton } from "./ForgotPasswordPage.style";
// import "./ForgotPasswordPage.scss";
// import { useState, FormEvent } from "react"; // Импортируем FormEvent

// // Другие импорты...

// export const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState(""); // Хранение email
//   const [newPassword, setNewPassword] = useState(""); // Хранение нового пароля
//   const [repeatPassword, setRepeatPassword] = useState(""); // Хранение повторного пароля
//   const [message, setMessage] = useState(""); // Хранение сообщения об успехе или ошибке

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => { // Указываем тип события
//     e.preventDefault();

//     // Получаем пользователей из Local Storage
//     const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

//     // Проверка на существование пользователя по email
//     const userIndex = existingUsers.findIndex((user: { email: string }) => user.email === email); // Указываем тип для user

//     if (userIndex === -1) {
//       setMessage("Пользователь с таким email не найден!");
//       return;
//     }

//     // Проверка на совпадение нового пароля и его повторения
//     if (newPassword !== repeatPassword) {
//       setMessage("Пароли не совпадают!");
//       return;
//     }

//     // Обновление пароля
//     existingUsers[userIndex].password = newPassword; // Меняем пароль
//     localStorage.setItem("users", JSON.stringify(existingUsers)); // Сохраняем изменения

//     setMessage("Пароль успешно изменен!");
//     setEmail("");
//     setNewPassword("");
//     setRepeatPassword("");
//   };

//   return (
//     <Container>
//       <StyleForgotPasswordPage>
//         <Heading headingText="Восстановление пароля" />
//         <form onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             placeholder="Номер телефона или Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Устанавливаем email
//           />
//           <Input
//             type="password"
//             placeholder="Новый пароль"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)} // Устанавливаем новый пароль
//           />
//           <Input
//             type="password"
//             placeholder="Повторите новый пароль"
//             value={repeatPassword}
//             onChange={(e) => setRepeatPassword(e.target.value)} // Устанавливаем повтор нового пароля
//           />
//           <StyledButton type="submit">Отправить</StyledButton>
//         </form>
//         {message && <p>{message}</p>} {/* Отображаем сообщение об успехе или ошибке */}
//         <LinkText text="Вернуться к авторизации" link="/" />
//       </StyleForgotPasswordPage>
//     </Container>
//   );
// };


import { useState } from "react"; // Импортируйте useState
import { Heading } from "../../components/Typography/Heading";
import { LinkText } from "../../components/Typography/LinkText";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/input/input";
import { StyleForgotPasswordPage, StyledButton } from "./ForgotPasswordPage.style";
import { useNavigate } from "react-router-dom"; // Импортируйте useNavigate
import "./ForgotPasswordPage.scss";

// Определяем интерфейс пользователя
interface User {
  email: string;
  password: string;
}

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState(""); // Хранение email
  const [newPassword, setNewPassword] = useState(""); // Хранение нового пароля
  const [repeatPassword, setRepeatPassword] = useState(""); // Хранение повторного пароля
  const [message, setMessage] = useState(""); // Хранение сообщения об успехе или ошибке
  const navigate = useNavigate(); // Инициализируйте useNavigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Задаем тип для события
    e.preventDefault();

    // Получаем пользователей из Local Storage
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    // Проверка на существование пользователя по email
    const userIndex = existingUsers.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      setMessage("Пользователь с таким email не найден!");
      return;
    }

    // Проверка на совпадение нового пароля и его повторения
    if (newPassword !== repeatPassword) {
      setMessage("Пароли не совпадают!"); // Отображаем сообщение об ошибке
      return;
    }

    // Обновление пароля
    existingUsers[userIndex].password = newPassword; // Меняем пароль
    localStorage.setItem("users", JSON.stringify(existingUsers)); // Сохраняем изменения

    setMessage("Пароль успешно изменен!");

    // Перенаправление на страницу входа после успешного изменения пароля
    navigate("/"); 
  };

  return (
    <Container>
      <StyleForgotPasswordPage>
        <Heading headingText="Восстановление пароля" />
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Номер телефона или Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Устанавливаем email
          />
          <Input
            type="password"
            placeholder="Новый пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} // Устанавливаем новый пароль
          />
          <Input
            type="password"
            placeholder="Повторите новый пароль"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)} // Устанавливаем повтор нового пароля
          />
          <StyledButton type="submit">Отправить</StyledButton>
        </form>
        {message && <p>{message}</p>} {/* Отображаем сообщение об успехе или ошибке */}
        <LinkText text="Вернуться к авторизации" link="/" />
      </StyleForgotPasswordPage>
    </Container>
  );
};
