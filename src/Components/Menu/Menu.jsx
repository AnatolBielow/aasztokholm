import { useState } from "react";
import { menu } from "../../Helpers";
import { Hamburger } from "../Hamburger";
import {
  NavigationList,
  Navigation,
  NavigationItem,
  Link,
  Overlay,
  MenuWrapper,
} from "./Menu.styled";

export const Menu = () => {
  const [open, setOpen] = useState(false)
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setOpen(!open);
    }
  };
 
  const handleClick = (e) => {
    if (open && e.currentTarget === e.target) {
      setOpen(!open)
    }
  }
  return (
    <MenuWrapper>
      <Hamburger open={open} setOpen={setOpen}/>
      <Overlay open={open} onClick={handleBackdropClick} />
      <Navigation open={open}>
      
        <NavigationList>
          {menu.map((item) => (
            <NavigationItem key={item.id}>
              <Link to={item.id} onClick={handleClick}>{item.value}</Link>
            </NavigationItem>
          ))}
        </NavigationList>
     
      </Navigation>
    </MenuWrapper>
  );
};
