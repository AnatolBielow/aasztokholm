import { Card } from '../Card';
import { CardItem, CardList } from "./CardSection.styled";
import { NavLink } from "react-router-dom";

export const CardSection = ({ items }) => {
  return (
    <section>
      <CardList>
        {items.map((item) => (
          <CardItem key={item.id}>
            <NavLink to={item.id}>
              <Card item={item} />
            </NavLink>
          </CardItem>
        ))}
      </CardList>
    </section>
  );
};
