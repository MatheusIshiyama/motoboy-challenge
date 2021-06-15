const { Schema, model } = require("../database");

const Product = new Schema({
  name: {
    type: Schema.Types.String,
  },
});

module.exports = new model("Product", Product);
