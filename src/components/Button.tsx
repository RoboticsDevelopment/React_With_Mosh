import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "warning"; // "?" makes it an optional property!
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  ); //works by naming it div too?!
}

export default Button;
