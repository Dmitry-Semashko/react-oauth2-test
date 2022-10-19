import { useAuth } from "react-oidc-context";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = ({
  children,
  redirectPath = '/' }) => {
  const auth = useAuth();
  if (!auth.isAuthenticated) {
    // user is not authenticated
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};