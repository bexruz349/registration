import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/input/input";
import { Button } from "../../components/UI/Button/Button";
import { Heading } from "../../components/Typography/Heading";
import { LinkText } from "../../components/Typography/LinkText";
import { StyleRegistrationPage } from "./RegistrationPage.style";
import "./RegistrationPage.scss";

interface IRegistrationForm {
  userEmail: string;
  userPassword: string;
  userPasswordRepeat: string;
}

export const RegistrationPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IRegistrationForm>();

  const onRegisterSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const { userEmail, userPassword, userPasswordRepeat } = data;

    // Проверка на совпадение паролей
    if (userPassword !== userPasswordRepeat) {
      alert("Пароли не совпадают!");
      return;
    }

    // Сохранение данных в Local Storage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Проверка на уникальность email
    const userExists = existingUsers.find((user: { email: string }) => user.email === userEmail);
    if (userExists) {
      alert("Пользователь с таким email уже существует!");
      return;
    }

    // Сохраняем нового пользователя
    existingUsers.push({ email: userEmail, password: userPassword });
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Редирект на страницу профиля после успешной регистрации
    navigate("/profile-page");
  };

  return (
    <Container>
      <StyleRegistrationPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegisterSubmit)} action="#">
          <Input
            type="text"
            placeholder="Email"
            {...register("userEmail")} // Убрали валидацию
          />
          <Input
            type="password"
            placeholder="Пароль"
            {...register("userPassword")} // Убрали валидацию
          />
          <Input
            type="password"
            placeholder="Повторите пароль"
            {...register("userPasswordRepeat")} // Убрали валидацию
          />
          <Button isPrimary buttonText="Зарегистрироваться" />
        </form>
        <LinkText text="Уже есть аккаунт? Войти" link="/" />
      </StyleRegistrationPage>
    </Container>
  );
};
