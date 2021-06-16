const { UserModel } = require("../models");
const { PasswordHash } = require("../utils");

const { hash, compare } = PasswordHash;

async function emailIsAvailable(email) {
  const emailIsTaken = await UserModel.findOne({ email });

  if (!emailIsTaken) {
    return true;
  }

  return false;
}

class UserController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email or Password was not provided" });
    }

    const isAvailable = await emailIsAvailable(email);

    if (!isAvailable) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashPassword = hash(password);

    const newUser = new UserModel({
      email,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "User registered", data: newUser });
  }

  async profile(req, res) {
    const { id } = req.query;

    const userExists = await UserModel.findOne({ _id: id }, { password: false });

    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User's profile", data: userExists });
  }
}

module.exports = UserController;
