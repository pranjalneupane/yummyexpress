import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ components }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated || isLoading) {
      return navigate("/login");
    }
  }, [isAuthenticated, isLoading]);
  return components;
}

export default ProtectedRoutes;
