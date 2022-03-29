import { Card } from "../Card/Card"
import { CardItem, CardList } from "./CardSection.styled"

export const CardSection = ({items}) => { 
    return (
        <section>
        <CardList>
       {items.map((item, index) => (
           <CardItem key={index}>
               <a href='/'>
               <Card item={item}/>
               </a>
           </CardItem>
       ))}
       </CardList>
    </section>
    )
    
}