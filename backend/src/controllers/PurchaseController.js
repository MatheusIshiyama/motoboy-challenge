const { PurchaseModel } = require("../models");
const { Token } = require("../utils");

const { validateToken } = Token;

class PurchaseController {
  async index(req, res) {
    const { authorization } = req.headers;

    const [, token] = authorization.split(" ");

    const user = await validateToken(token);

    const purchases = await PurchaseModel.find({ userId: user.id });

    res.status(200).json({ message: "Purchases founded", data: purchases });
  }
}

module.exports = PurchaseController;
