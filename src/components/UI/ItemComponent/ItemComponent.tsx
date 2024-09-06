import React, { type ReactNode } from "react"

// interface Item {
//   image: string
//   text: string;
//   content: ReactNode;
// }

export interface ItemComponentProps {
  image: string;
  text: string;
  content:ReactNode;
}

const ItemComponent:React.FC<ItemComponentProps> = ({image,text,content}) => {
   
  return (
    <li>
        <img src={image} alt={text}/>
        <p>{content}</p>
    </li>
  )
}

export default ItemComponent;