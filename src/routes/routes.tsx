import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../layout/auth-layout";
import PrivateRoute from "../layout/private-route";
import UserLogin from "../features/auth/pages/login/userLogin";
import Clinics from "../features/admin/clinics/clinics-tab";
import Dashboard from "../features/admin/dashboard/dashboard";
import Patients from "../features/admin/patients/index";
import CareTeam from "../features/admin/care-team/care-team-";
import Settings from "../features/admin/settings/setting-tab";
import ClinicDetails from "../features/admin/clinics/clinic-details";
import MainLayout from "../layout/main-layout";

const ForgotPassword = lazy(
  () => import("../features/auth/pages/login/ForgotPassword")
);
const Otp = lazy(() => import("../features/auth/pages/login/Otp"));
const SetPassword = lazy(
  () => import("../features/auth/pages/login/SetPassword")
);

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
      },
    ],
  },
  {
    path: "app",
    element: (
      <PrivateRoute>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </PrivateRoute>
    ),
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
        path: "clinic-details/:id",
        element: <ClinicDetails />
      },
      {
        path: "care-team",
        element: <CareTeam />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
