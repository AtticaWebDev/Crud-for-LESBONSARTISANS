import Product from "../models/productModel.js";

// Récupérer tous les produits
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Récupérer un produit par son ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un nouveau produit
export const createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    rating: req.body.rating,
    available: req.body.available,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mettre à jour un produit par son ID
export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    product.name = req.body.name || product.name;
    product.type = req.body.type || product.type;
    product.price = req.body.price || product.price;
    product.rating = req.body.rating || product.rating;
    product.available = req.body.available || product.available;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer un produit par son ID
export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    await product.remove();
    res.json({ message: "Produit supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
