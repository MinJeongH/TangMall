import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../components/auth/AuthProvider";

function AuthLayout() {
  const auth = useAuth();
  const location = useLocation();
  const [isUser, setIsUser] = useState(
    localStorage.getItem("user") ? true : false
  );

  // const userState = useSelector((state) => state.user);

  useEffect(() => {
    console.log(auth.user);
    if (auth.user) {
      auth.checkAuth().then((res) => {
        console.log("isAuth : ", res);
        if (res) {
          if (auth.user) {
            setIsUser(true);
          } 
        }else{
          if(auth.user){
            setIsUser(false);
            auth.signout().then((res) => {});
          }
        }
      });
    } else {
      if(localStorage.getItem("user")){
        localStorage.removeItem("user");
      }
      setIsUser(false);
    }
  }, [auth]);

  return (
    <div className="app">
      {isUser ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </div>
  );
}

export default AuthLayout;
