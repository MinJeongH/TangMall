import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  authUserAction,
  loginUser,
  logoutUser,
  registerUser,
} from "../../_actions/user_actions";

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).userId
      : null
  );

  const dispatch = useDispatch();

  const register = async (request) => {
    return await dispatch(registerUser(request)).then((response) => {
      console.log("Register Response : ", response);
      if (response.payload.result && response.payload.result === "success") {
        // 회원가입 성공 시
        return true;
      } else {
        // 회원가입 실패 시
        return false;
      }
    });
  };

  const signin = async (request) => {
    return await dispatch(loginUser(request)).then((response) => {
      console.log("Login Response : ", response);
      if (response.payload.result && response.payload.result === "success") {
        // 로그인 성공 시
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.payload.userInfo)
        );
        setUser(response.payload.userInfo.userId);
        return true;
      } else {
        // 로그인 실패 시
        return false;
      }
    });
  };

  const signout = async () => {
    console.log("signOut!!");
    return await dispatch(logoutUser()).then((res) => {
      console.log("Logout Response : ", res);
      if (res.payload.result && res.payload.result === "success") {
        setUser(null);
        localStorage.removeItem("user");
        return true;
      } else return false;
    });
  };

  const checkAuth = async () => {
    console.log("checkAuth!!");
    return await dispatch(authUserAction()).then((res) => {
      console.log("checkAuth Response : ", res);
      if (res.payload.result && res.payload.result === "success") {
        if (res.payload.isAuth) {
          console.log("isAuth True~~");
          setUser(res.payload.userId);
          return true;
        } else {
          console.log("isAuth false~~");
          setUser(null);
          return false;
        }
      } else return false;
    });
  };

  const value = { user, signin, signout, checkAuth, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
