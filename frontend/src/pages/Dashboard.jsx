import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    console.log("Déconnexion en cours...");
    await logout();
    console.log("Déconnexion réussie.");
  };

  return (
    <>
      <div className="pt-5 flex justify-end pr-4">
        <Button variant="contained" onClick={handleLogout}>
          Déconnexion
        </Button>
      </div>
      {!isAuthenticated && <p>Vous êtes déconnecté.</p>}
    </>
  );
};

export default Dashboard;
