import React, { type ReactNode } from 'react'
import styles from "./Card.module.css"

type CardProps = {
    children: ReactNode;
    className: string;
}

const Card:React.FC<CardProps> = ({children,className}) => {
  return (
    <div className={`${styles.card} ${className}`}>{children}</div>
  )
}

export default Card;