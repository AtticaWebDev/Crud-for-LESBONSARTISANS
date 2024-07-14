import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Alert, Spin } from "antd";
import useLogin from "../hooks/useLogin"; // Assurez-vous d'importer useLogin depuis votre hook personnalisé

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await loginUser(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:max-w-md">
        <h1 className="font-bold text-4xl text-center mb-8">Connectez-vous</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="space-y-4">
            <TextField
              label="Email"
              type="email"
              name="email"
              fullWidth
              required
            />
            <TextField
              label="Mot de passe"
              type="password"
              name="password"
              fullWidth
              required
            />
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <div className="text-center">
              Pas encore inscrit ?{" "}
              <Link to="/" className="font-bold">
                Inscrivez-vous !
              </Link>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <Spin /> : "Se connecter"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
