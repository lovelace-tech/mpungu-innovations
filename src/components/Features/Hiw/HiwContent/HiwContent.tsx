import React from 'react'
import styles from "./HiwContent.module.css";

type HiwContentProps = {
  item: {
    id:number;
    image:string;
    title:string;
    description:string;
  };
  index:number;

}



const HiwContent:React.FC<HiwContentProps> = (props) => {
  if (props.index % 2 === 0) {
    return (
    <li className={styles.wteStepWrapper}>
      <div className={styles.wteStep}>Step {props.item.id}: <h5>{props.item.title}</h5></div>
      <div className={styles.problemContent}>
        <img src={props.item.image} alt={props.item.title} className={styles.problemImage}/>
        <p className={styles.problemCopy}>
          {props.item.description}
        </p>
      </div>
    </li> 
    )
  }
  else {
    return (
      <li className={styles.wteStepWrapper}>
        <div className={styles.wteStep}>Step {props.item.id}:<h5>{props.item.title}</h5></div>
        <div className={`${styles.problemContent} ${styles.right}`}>
          <img src={props.item.image} alt={props.item.title} className={styles.problemImage}/>
          <p className={styles.problemCopy}>
            {props.item.description}
          </p>
        </div>
      </li> 
    )
  }
}

export default HiwContent;