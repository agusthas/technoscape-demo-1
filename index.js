const Products = require('./product.json');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('simple rest api');
});

/* Routes */

// GET:  all list of products
app.get('/products/listall', (req, res) => {
  res.json(Products);
});

// GET: detail product by id
app.get('/products/:id', (req, res) => {
  const searchId = +req.params.id;
  const product = Products.find(({ id }) => id === searchId);

  res.json(product);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
