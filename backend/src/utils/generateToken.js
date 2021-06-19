const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

class GenerateToken {
  async generateToken(user) {
    return jwt.sign(user, JWT_SECRET);
  }
}

module.exports = new GenerateToken();
