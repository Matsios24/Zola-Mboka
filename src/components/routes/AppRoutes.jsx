import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/Home";
import PremiumEvents from "../../pages/PremiumEvents";
import EventDetail from "../ui/eventDetails/EventDetail";
import ShowEvent from "../../pages/ShowEvent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="premiumEvents" element={<PremiumEvents />} />
        <Route path="premiumEvents/:id" element={<EventDetail />} />
        <Route path="showEvent" element={<ShowEvent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
