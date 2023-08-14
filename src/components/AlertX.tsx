import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "success" | "danger" | "warning";
  onClose: () => void;
}

const AlertX = ({ children, color = "warning", onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible"}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default AlertX;
