import { Page } from './Page';
import image from '../Images/newspaper.jpg'

const title = "Wydarzenia Gruppy AA"

        export const Events = ({events}) => {
            return <Page title={title} img={image} items={events} />;
          };
  