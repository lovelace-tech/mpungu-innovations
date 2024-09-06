import React from 'react'
import styles from "./TakeAction.module.css"
import Button from '../../UI/Button/Button';

const TakeAction:React.FC = () => {
  return (
    <section className={styles.actionSection}>
        <div className={styles.actionCTA}>
            <Button>Get a Quote</Button>
            <Button>Join the Movement</Button>
            <Button>Learn More!</Button>
        </div>
    </section>
  )
}

export default TakeAction;