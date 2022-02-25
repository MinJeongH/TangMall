import React from "react";
import "./App.scss";
import Card from "./components/layout/card";
import ItemDetail from "./components/detail/item_detail";
import Commercial from "./components/layout/commercial";
import Header from "./components/layout/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Info from "./components/layout/info";

const routes = [
  {
    path: "/",
    component: (
      <Card>
        <Main />
      </Card>
    ),
  },
  {
    path: "/detail",
    component: (
      <Card>
        <ItemDetail />
      </Card>
    ),
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Commercial />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.component}></Route>
          ))}
        </Routes>
      </BrowserRouter>
      <Info />
    </div>
  );
}

export default App;
