import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Firebase";

const MainLayout = () => {
  const [user, isLoading] = useAuthState(auth); //kullaniici ve async doner

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    //kullanici var mi yok mu bakar
    return <Navigate to="/sign-in" replace />;
  }
  return (
    <div>
      <Outlet />{" "}
      {/* kapsayici icinde yazdigimiz yerleri gosterir nerde yazarsak */}
    </div>
  );
};

export default MainLayout;
