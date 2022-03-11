import React from "react";
import "./App.scss";
import Header from "./components/layout/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./common/auth/AuthProvider";
import ItemDetail from "./components/detail/item_detail";
import Register from "./components/join/Register";
import RegisterAgree from "./components/join/RegisterAgree";
import Card from "./components/layout/card";
import Login from "./components/login/Login";
import Main from "./components/main/main";
import Info from "./components/layout/info";
import Ads from "./components/layout/ads";
import AuctionInfo from "./components/auction_info/auction_info";
import AuthLayout from "./components/layout/AuthLayout";
import Sample from "./components/sample";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const routes = [
  {
    path: "/",
    component: (
      <>
        <Ads />
        <Main />
      </>
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
      <>
        <Ads />
        <Card>
          <ItemDetail />
        </Card>
      </>
    ),
  },
  {
    path: "/auction/:menu",
    component: (
      <>
        <Ads />
        <AuctionInfo />
      </>
    ),
  },
  {
    path: "/mypage",
    component: (
      <Card>
        <AuthLayout>
          <Sample />
        </AuthLayout>
      </Card>
    ),
  },
];

function App() {
  return (
    <div className="app">
      <RecoilRoot>
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <Routes>
              {routes.map((route, key) => (
                <Route
                  key={key}
                  path={route.path}
                  element={route.component}
                ></Route>
              ))}
            </Routes>
          </AuthProvider>
        </BrowserRouter>
        <Info />
      </RecoilRoot>
    </div>
  );
}

export default App;
