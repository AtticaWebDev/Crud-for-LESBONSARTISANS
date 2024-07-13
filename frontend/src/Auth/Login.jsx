import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault(); // Empêche le comportement de soumission par défaut du formulaire
    const formData = new FormData(event.target);
    const values = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(values); // Affiche les valeurs dans la console pour vérification
    // Ici, vous pouvez implémenter la logique pour envoyer les données au serveur, etc.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:max-w-md">
        <h1 className="font-bold text-4xl text-center mb-8">Connectez-vous</h1>
        <form onSubmit={handleLogin} autoComplete="off">
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
            <div className="text-center">
              Pas encore inscrit ?{" "}
              <Link to="/" className="font-bold">
                Inscrivez-vous !
              </Link>
            </div>
            <Button
              type="submit" // Utilisez 'type="submit"' pour soumettre le formulaire
              variant="contained"
              color="primary"
              fullWidth
            >
              Se connecter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
