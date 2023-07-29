const Article = require('../models/Article');

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createArticle = async (req, res) => {
  const { name, price, stock } = req.body;
  const article = new Article({ name, price, stock });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllArticles,
  createArticle,
};
