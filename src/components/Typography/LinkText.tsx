import { Link } from "react-router-dom";

interface ILinkTextProps {
  text: string;
  link: string;
}

export const LinkText: React.FC<ILinkTextProps> = ({ text, link }) => {
  return (
    <div>
      <Link to={link}>{text}</Link>
    </div>
  );
};
