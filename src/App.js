import { Header, Hamburger, Phone, Footer } from './Components'
import { menu } from "./Helpers/menu";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle.js";
import { theme } from "./Helpers/theme";
import { ThemeProvider } from 'styled-components';
import { about } from './Helpers/about'
import { AboutSection } from './Components/About/About';
import { CardSection } from './Components/CardSection/CardSection';
import { cards } from './Helpers/cards'
import { Wave } from './Components/Wave/Wave';



function App() {

  const [open, setOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <Wave/>
      <Header items={menu} open={open} setOpen={setOpen}/>
      <Hamburger open={open} setOpen={setOpen}/>
      <Phone number="0712345678" />
      <AboutSection item={about}/>
      <CardSection items={cards}/>
      <Footer items="INTERGRUPPA AA SZTOKHOLM" />
      
    </>
    </ThemeProvider>
  );
}

export default App;