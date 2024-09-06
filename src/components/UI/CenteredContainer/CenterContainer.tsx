import { type PropsWithChildren } from "react";
import styles from "./CenterContainer.module.css"

type containerProps = PropsWithChildren

const CenterContainer = ({children}:containerProps) => {
  return (
    <div className={`${styles.container}`}>{children}</div>
  )
}

export default CenterContainer;