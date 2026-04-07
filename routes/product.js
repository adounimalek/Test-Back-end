const express = require("express");
const productRouter = express.Router(); 

const Product = require("../models/product");


// add product
productRouter.post("/add", async (req, res) => {
  try {
    let newproduct = new Product(req.body);
    let result = await newproduct.save();
    res.send({ product: result, msg: "product is added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding product" });
  }
});

//get all products

productRouter.get("/", async (req, res) => {
  try {
    let result = await Product.find();
    res.send({ products: result, msg: "all products" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding product" });
  }
});

//find product By Id

productRouter.get("/:id", async (req, res) => {
  try {
    let result = await Product.findById(req.params.id);
    res.send({ product: result, msg: "one product" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding product" });
  }
});

//delete product

productRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.send({ msg: " product Is Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding product" });
  }
});

//edit product

productRouter.put("/:id", async (req, res) => {
  try {
    let result = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " product Is Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "error adding product" });
  }
});

module.exports = productRouter;
