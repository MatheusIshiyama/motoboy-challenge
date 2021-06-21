const { ProductModel } = require("../models");

class ProductController {
  async index(req, res) {
    const products = await ProductModel.find({});

    res.status(200).json({ message: "Products founded", data: products });
  }

  async create(req, res) {
    const { name } = req.body;

    const productExists = await ProductModel.findOne({ name });

    if (productExists) return res.status(400).json({ message: "Product already registered" });
    
    const newProduct = new ProductModel({
      name,
    });

    await newProduct.save();

    res.status(200).json({ message: "Product registered", data: newProduct });
  }
}

module.exports = ProductController;
