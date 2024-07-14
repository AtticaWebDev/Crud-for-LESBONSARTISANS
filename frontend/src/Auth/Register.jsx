/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Spin, Alert } from "antd";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("passwordConfirm"), // Ajout de la confirmation de mot de passe
    };
    registerUser(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:max-w-md">
        <h1 className="font-bold text-4xl text-center mb-8">Créer un compte</h1>
        <form onSubmit={handleRegister} autoComplete="off">
          <div className="space-y-4">
            <TextField
              label="Nom, Prénom"
              type="text"
              name="name"
              fullWidth
              required
            />
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
            <TextField
              label="Ressaisissez votre mot de passe"
              type="password"
              name="passwordConfirm"
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
              Déjà un compte ?{" "}
              <Link to="/login" className="font-bold">
                connectez-vous !
              </Link>
            </div>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {loading ? <Spin /> : "S'inscrire"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
