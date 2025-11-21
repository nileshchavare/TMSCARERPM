import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../layout/auth-layout";
import PrivateLayout from "../layout/private-layout";
import UserLogin from "../features/auth/pages/login/userLogin";
import Clinics from "../features/admin/clinics/index";
import Dashboard from "../features/admin/dashboard/dashboard";
import Patients from "../features/admin/patients/index";
import CareTeam from "../features/admin/care-team/index";
import Settings from "../features/admin/settings/index";


const ForgotPassword = lazy(() => import("../features/auth/pages/login/ForgotPassword"));
const Otp = lazy(() => import("../features/auth/pages/login/Otp"));
const SetPassword = lazy(() => import("../features/auth/pages/login/SetPassword"));

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
  {
    path: "app",
    element: <PrivateLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "clinics",
        element: <Clinics />,
      },
      {
        path: "care-team",
        element: <CareTeam />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ]
  },
]);
