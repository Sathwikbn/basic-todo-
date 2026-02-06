const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { authSchema } = require("../validators/auth");

const signup = async (req, res, next) => {
  try {
    const payload = await authSchema.validateAsync(req.body);
    const existing = await User.findOne({ email: payload.email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(payload.password, 10);
    const user = await User.create({
      name: payload.name,
      email: payload.email,
      password: passwordHash
    });

    return res.status(201).json({ id: user._id, email: user.email });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "dev-secret",
      { expiresIn: "12h" }
    );

    return res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    return next(error);
  }
};

const forgotPassword = async (req, res) => {
  res.json({ message: "Password reset link sent if user exists." });
};

module.exports = { signup, login, forgotPassword };
