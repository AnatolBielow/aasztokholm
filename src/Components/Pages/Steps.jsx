import { Page } from "./Page";
import image from "../Images/mountain.jpg";

const title = "12 Kroków AA";

export const Steps = ({steps}) => {
  return <Page title={title} img={image} items={steps} />;
};
