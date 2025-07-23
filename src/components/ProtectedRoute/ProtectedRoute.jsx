import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  return !isLoggedIn ? <Navigate to="/login" replace /> : children;
}

export default ProtectedRoute;
