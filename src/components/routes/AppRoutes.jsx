import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/Home";
import PopularEvents from "../../pages/PopularEvents";
import PremiumEvents from "../../pages/PremiumEvents";
import ShowEvent from "../../pages/ShowEvent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="premiumEvents" element={<PremiumEvents />} />
        <Route path="popularEvents" element={<PopularEvents />} />
        <Route path="popularEvents" element={<PopularEvents />} />

        <Route path="showEvent/" element={<ShowEvent />}>
          <Route path="popularEvents" element={<PopularEvents />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
