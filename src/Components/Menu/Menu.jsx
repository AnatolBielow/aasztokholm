import {
  NavigationList,
  Navigation,
  NavigationItem,
  Link,
  Overlay,
  MenuWrapper,
} from "./Menu.styled";

export const Menu = ({ items, open, setOpen }) => {
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
      <Overlay open={open} onClick={handleBackdropClick} />
      <Navigation open={open}>
        <NavigationList>
          {items.map((item) => (
            <NavigationItem key={item.id}>
              <Link to={item.id} onClick={handleClick}>{item.value}</Link>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </MenuWrapper>
  );
};
