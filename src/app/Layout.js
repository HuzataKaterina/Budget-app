import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
