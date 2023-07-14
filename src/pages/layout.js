import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./navbar";
import NavbarMobile from "./navbar_mobile";
import { useMediaQuery } from 'react-responsive'

const Layout = () => {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  return (
    <>
      {!isPortrait && <Navbar />}
      {isPortrait && <NavbarMobile />}
      <Outlet />
    </>
  );
};

export default Layout;