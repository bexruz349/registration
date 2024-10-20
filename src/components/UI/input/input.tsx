import React from "react";
import { StyleInput, ErrorMessage } from "./input.style"; // Исправлен импорт

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string; // Сделаем это поле необязательным, чтобы можно было использовать Input без ошибки
  isError?: boolean;  // Сделаем это поле необязательным, чтобы избежать ошибок при его отсутствии
  icon?: JSX.Element; // Добавляем свойство для иконки
}

export const Input = ({
  type,
  placeholder,
  errorText = "",
  isError = false,
  icon, // Получаем иконку
  ...props
}: IInput) => {
  return (
    <div className="input-container" style={{ position: 'relative' }}> {/* Добавляем класс для стилизации */}
      {icon && <span className="input-icon">{icon}</span>} {/* Отображаем иконку */}
      <StyleInput
        type={type}
        placeholder={placeholder}
        $isError={isError}
        {...props}
      />
      {isError && <ErrorMessage>{errorText}</ErrorMessage>} {/* Условие для отображения ошибки */}
    </div>
  );
};
