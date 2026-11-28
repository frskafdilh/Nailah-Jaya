import { registerUser, loginUser } from "../services/authService.js";
import { validateRegister, validateLogin } from "../utils/validators.js";

export async function register(req, res, next) {
  try {
    const errors = validateRegister(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: errors.join(", ") });
    }
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, message: "Registrasi berhasil", data: { user } });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const errors = validateLogin(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: errors.join(", ") });
    }
    const data = await loginUser(req.body);
    res.json({ success: true, message: "Login berhasil", data });
  } catch (err) {
    next(err);
  }
}