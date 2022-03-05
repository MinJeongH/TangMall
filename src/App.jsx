import React from "react";
import "./App.scss";
import Card from "./components/layout/card";
import ItemDetail from "./components/detail/item_detail";
import Commercial from "./components/layout/commercial";
import Header from "./components/layout/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Info from "./components/layout/info";
import Login from "./components/login/Login";
import Register from "./components/join/Register";
import CommonLayout from "./layout/CommonLayout";
import LoginLayout from "./layout/LoginLayout";
import { AuthProvider, RequireAuth } from "./components/auth/AuthProvider";

const publicRoutes = [
  {
    path: "/",
    component: (
      <Card>
        <Main />
      </Card>
    ),
  },
];

const loginRoutes = [
  {
    path: "/login",
    component: (
      <Card>
        <Login />
      </Card>
    ),
  },
  {
    path: "/join",
    component: (
      <Card>
        <Register />
      </Card>
    ),
  },
];

const sessionRoutes = [
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
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Common Layout Routes */}
            <Route element={<CommonLayout />}>
              {publicRoutes.map((route) => (
                <Route path={route.path} element={route.component}></Route>
              ))}
              <Route element={<RequireAuth />}>
                {sessionRoutes.map((route) => (
                  <Route path={route.path} element={route.component}></Route>
                ))}
              </Route>
            </Route>

            {/* Login Layout Routes */}
            <Route element={<LoginLayout />}>
              {loginRoutes.map((route) => (
                <Route path={route.path} element={route.component}></Route>
              ))}
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
