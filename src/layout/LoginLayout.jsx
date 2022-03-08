import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import Info from "../components/layout/info";

function LoginLayout() {
  return (
    <div  className="app">
      <Header />
      <Outlet />
      <Info/>
    </div>
  );
}

export default LoginLayout;
