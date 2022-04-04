import { About } from "../Pages/About";
import { CardSection } from "../CardSection/CardSection";
import { Hero } from "../Hero";

export const Home = ({ number, about, cards }) => {
  return (
    <>
      <Hero number={number} />

      <About item={about} />
      <CardSection items={cards} />
    </>  );
};
