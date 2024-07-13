import User from "../models/userModel.js";
import createError from "../utils/appError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = dotenv.config();

const TOKENKEY = process.env.JWT_SECRET_KEY;

// REGISTER USER
const signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return next(new createError("Utilisateur déja existant !", 400));
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // JWT
    const token = jwt.sign({ _id: newUser._id }, TOKENKEY, {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "success",
      message: "Utilisateur enregistré avec succès",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

// LOGGING USER
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return next(new createError("Utilisateur introuvable !", user.password));

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(
        new createError("Votre email ou mot de passe est incorrect", 401)
      );
    }

    // JWT
    const token = jwt.sign({ _id: user._id }, TOKENKEY, {
      expiresIn: "90d",
    });

    res.status(200).json({
      status: "success",
      token,
      message: "Utilisateur connecté avec succès",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default { signup, login };
