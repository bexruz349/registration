import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/input/input";
import { Button } from "../../components/UI/Button/Button";
import { Heading } from "../../components/Typography/Heading";
import { LinkText } from "../../components/Typography/LinkText";
import { StyleLoginPage } from "./LoginPage.style"; // Импорт стилей
import { RegistrationInfo } from "../../components/UI/Registationinfo/Registrationinfo"; // Убедитесь, что путь правильный
import "./LoginPage.scss";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<ILoginForm>();

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    const { userEmail, userPassword } = data;

    // Получаем пользователей из Local Storage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Проверка на существование пользователя
    const user = existingUsers.find((user: { email: string; password: string }) => user.email === userEmail);

    // Если пользователь не найден
    if (!user) {
      alert("Нет такого пользователя!"); // Сообщение об ошибке
      return;
    }

    // Проверка пароля
    if (user.password !== userPassword) {
      alert("Неверный пароль!"); // Сообщение об ошибке
      return;
    }

    // Редирект на MainPage после успешного входа
    navigate("/main-page");
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
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
          <Button isPrimary buttonText="Войти" />
        </form>
        <div className="button-group">
          <LinkText text="Забыли пароль?" link="/forgot-password" />
          <LinkText text="Нет аккаунта? Зарегистрироваться" link="/registration" />
        </div>
        <RegistrationInfo /> {/* Здесь мы используем RegistrationInfo */}
      </StyleLoginPage>
    </Container>
  );
};
