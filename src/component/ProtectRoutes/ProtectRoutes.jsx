import { Outlet, Navigate } from "react-router-dom";

const ProtectRoutes = () => {
  const authorization = localStorage.getItem("access_token");


  return authorization ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectRoutes;
