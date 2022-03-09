import React from "react";
import { Outlet } from "react-router-dom";
import Commercial from "../components/layout/commercial";
import Header from "../components/layout/header";
import Info from "../components/layout/info";

function CommonLayout() {
  return (
    <div className="app">
      <Header />
      <Commercial />
      <Outlet />
      <Info />
    </div>
  );
}

export default CommonLayout;
