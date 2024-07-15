import React from "react";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className="pt-5 flex justify-end pr-4">
        <Button variant="contained" onClick={handleLogout}>
          Déconnexion
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
