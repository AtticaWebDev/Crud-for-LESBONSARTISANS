import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError(`Mot de passe non identique`);
    }

    try {
      setError(null);
      setLoading(false);
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await res.json();
    } catch (error) {}
  };

  return {};
};

export default useSignup;
