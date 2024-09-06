import { PropsWithChildren} from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren

const Button = ({children}:ButtonProps) => {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default Button;