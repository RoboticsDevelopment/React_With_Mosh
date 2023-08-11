import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
   
}

function Button({children, onClick}: Props) {
return <button className="btn btn-primary" onClick={onClick}>{children}</button>  //works by naming it div too?!
}

export default Button