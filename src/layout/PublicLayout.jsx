import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../components/auth/AuthProvider";

function PublicLayout() {
  const auth = useAuth();

  useEffect(() => {
    console.log("PUBLIC LAYOUT", auth.user);
    if (auth.user) {
      auth.checkAuth().then((res) => {
        if (!res) {
          if (auth.user || localStorage.getItem("user")) {
            auth.signout().then((res) => {});
          }
        }
      });
    }
  }, [auth]);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default PublicLayout;
