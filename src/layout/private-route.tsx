import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// import useAuthority from "@/hooks/use-authority";

// import storageService from "../services/core/storage-service";

const PrivateRoute = ({ children }: React.PropsWithChildren) => {
  // const location = useLocation();
  // const isLoggedIn = !!storageService.getToken();

  // const { hasRouteAuthority } = useAuthority();

  // if (!isLoggedIn) {
  //   localStorage.setItem("redirectURL", location.pathname);

    // return <Navigate to="/auth/login" state={{ from: location }} replace />;
//   }

//   localStorage.removeItem("redirectURL");
  // return hasRouteAuthority ? children : <Navigate to={"/not-authorized"} state={{ from: location }} replace />;

  return children
};

export default PrivateRoute;
