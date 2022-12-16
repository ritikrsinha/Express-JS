const path = require('path');
const express = require('express');

const router = express.Router();

const routDir = require('../util/path')

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(routDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
