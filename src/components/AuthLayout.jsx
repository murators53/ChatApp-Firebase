import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./MainLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Firebase";

const AuthLayout = () => {

  const [ user, isLoading] = useAuthState(auth)
  console.log(useAuthState(auth))
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  if (user) {
    return <Navigate to="/" replace />;//sayfa yonlendirme
  }
  return <Outlet />;
};

export default AuthLayout;
