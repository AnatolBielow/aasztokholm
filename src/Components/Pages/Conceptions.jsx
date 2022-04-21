import { Page } from './Page';
import image from '../Images/conceptions.jpg'

const title = "12 Koncepcji AA"

        export const Conceptions = ({conceptions}) => {
            return <Page title={title} img={image} items={conceptions} />;
          };
  