import { useState } from "react"
import Item from "./Item"

const itemsData = [
  {
    name:"good mood",
    packed:true
  },
  {
    name:"Passport",
    packed:false
  },
  {
    name:"phone charger",
    packed:false
  }
]

const ItemList = () => {
  const [items,setItems] = useState(itemsData);
  return (
    <ul>
      {items?.map((item,index)=>{
        return (
          <Item key={`${item}:${index}`} name={item?.name} packed={item?.packed}/>
        )
      })}
    </ul>
  )
}

export default ItemList