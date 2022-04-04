import { Page } from './Page';
import image from '../Images/newspaper.jpg'
import { events } from "../../Helpers/events"
const title = "Wydarzenia Gruppy AA"

        export const Events = () => {
            return <Page title={title} img={image} items={events} />;
          };
  