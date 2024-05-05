import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContextComponent";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
}

export default PrivateRoute;
