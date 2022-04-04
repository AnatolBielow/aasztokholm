import { Card } from "../Card/Card";
import { CardItem, CardList } from "./CardSection.styled";
import { Link } from "react-router-dom";

export const CardSection = ({ items }) => {
  return (
    <section>
      <CardList>
        {items.map((item) => (
          <CardItem key={item.id}>
            <Link to={item.id}>
              <Card item={item} />
            </Link>
          </CardItem>
        ))}
      </CardList>
    </section>
  );
};
