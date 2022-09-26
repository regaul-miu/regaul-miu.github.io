const Product = require('../../model/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        ageTitle: 'Add Product',
        path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true
    });
};

exports.saveProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
};
exports.getAllProduct = (req, res, next) => {
    res.render('shop', {
        prods: Product.getAll(), pageTitle: 'Shop', path: '/', formsCSS: true,
        productCSS: true, activeShop: true
    });
};