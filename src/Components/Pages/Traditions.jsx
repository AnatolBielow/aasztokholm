import { Page } from './Page';
import image from '../Images/tradition.jpg'

const title = "12 Tradycji AA"

        export const Traditions = (props,{traditions}) => {
            return <Page title={title} img={image} items={traditions} />;
          };
  