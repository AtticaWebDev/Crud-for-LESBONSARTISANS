import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault(); // Empêche le comportement de soumission par défaut du formulaire
    const formData = new FormData(event.target);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(values); // Affiche les valeurs dans la console pour vérification
    // Ici, vous pouvez implémenter la logique pour envoyer les données au serveur, etc.
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
            <div className="text-center">
              Déjà un compte ?{" "}
              <Link to="/login" className="font-bold">
                connectez-vous !
              </Link>
            </div>
            <Button
              type="submit" // Utilisez 'type="submit"' pour soumettre le formulaire
              variant="contained"
              color="primary"
              fullWidth
            >
              S'inscrire
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
