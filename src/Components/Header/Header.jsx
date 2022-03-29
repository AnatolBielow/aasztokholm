import { Menu } from "../Menu";
import logo from "./aalogo.svg";
import { HeaderStyled, Logo} from "./Header.styled";
 
export const Header = ({ items, open, setOpen }) => {
  return (
    <HeaderStyled>
      <Logo src={logo} alt="logo" />
      <Menu items={items} open={open} setOpen={setOpen} />
    </HeaderStyled>
  );
};

