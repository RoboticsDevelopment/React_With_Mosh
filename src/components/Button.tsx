import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
    color: string;
   
}

function Button({children, onClick, color}: Props) {
return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>  //works by naming it div too?!
}

export default Button