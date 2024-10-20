import React from "react";
import { Link } from "react-router-dom"; // Проверьте, что вы используете правильный Link, если у вас используется React Router

interface LinktextProps {
  text: string;
  link: string;
}

export const Linktext: React.FC<LinktextProps> = ({ text, link }) => {
  return <Link to={link}>{text}</Link>;
};
