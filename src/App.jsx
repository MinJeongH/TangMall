import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { AuthProvider } from "./components/auth/AuthProvider";
import ItemDetail from "./components/detail/item_detail";
import Register from "./components/join/Register";
import RegisterAgree from "./components/join/RegisterAgree";
import Card from "./components/layout/card";
import Login from "./components/login/Login";
import Main from "./components/main/main";
import AuthLayout from "./layout/AuthLayout";
import CommonLayout from "./layout/CommonLayout";
import LoginLayout from "./layout/LoginLayout";
import PublicLayout from "./layout/PublicLayout";

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
    path: "/login",
    component: (
      <Card>
        <Login />
      </Card>
    ),
  },
  {
    path: "/register",
    component: (
      <Card>
        <Register />
      </Card>
    ),
  },
  {
    path: "/registeragree",
    component: (
      <Card>
        <RegisterAgree />
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
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Common Layout Routes */}
            <Route element={<CommonLayout />}>
              <Route element={<PublicLayout />}>
                {routes.map((route, key) => (
                  <Route
                    key={key}
                    path={route.path}
                    element={route.component}
                  ></Route>
                ))}
              </Route>
              <Route element={<AuthLayout />}>
                {routes.map((route, key) => (
                  <Route
                    key={key}
                    path={route.path}
                    element={route.component}
                  ></Route>
                ))}
              </Route>
            </Route>
            {/* Login Layout Routes */}
            <Route element={<LoginLayout />}>
              {routes.map((route, key) => (
                <Route
                  key={key}
                  path={route.path}
                  element={route.component}
                ></Route>
              ))}
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
