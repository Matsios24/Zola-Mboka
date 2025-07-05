import React from "react";
import Header from "../ui/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
