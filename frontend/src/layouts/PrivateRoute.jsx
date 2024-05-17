import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
