import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../layout/auth-layout";
import UserLogin from "../components/pages/login/userLogin";


const ForgotPassword = lazy(() => import("../components/pages/login/ForgotPassword"));
const Otp = lazy(() => import("../components/pages/login/Otp"));
const SetPassword = lazy(() => import("../components/pages/login/SetPassword"));

const Loader = () => <div>Loading...</div>;

export const privateRoutes = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="auth/login" />,
  },
  {
    path: "auth",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <UserLogin />,
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "otp",
        element: (
          <Suspense fallback={<Loader />}>
            <Otp />
          </Suspense>
        ),
      },
      {
        path: "set-password",
        element: (
          <Suspense fallback={<Loader />}>
            <SetPassword />
          </Suspense>
        ),
      }
    ],
  },
]);
