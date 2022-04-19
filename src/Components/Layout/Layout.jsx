import { Header } from "../Header";
import { Hamburger } from "../Hamburger";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

export const Layout = (props,{ menu }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header items={menu} open={open} setOpen={setOpen} />
      <Hamburger open={open} setOpen={setOpen} />
      <Outlet />
      <Footer items="INTERGRUPPA AA SZTOKHOLM" />
    </>
  );
};
