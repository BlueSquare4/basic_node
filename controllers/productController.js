let products = [];

// List of all products
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// Creating a new product
exports.createProduct = (req, res) => {
    const { name, description, price } = req.body;
    const product = { id: products.length + 1, name, description, price };
    products.push(product);
    res.status(201).json(product);
};

// Retrieving a specific product by its ID
exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

// Updating an existing product's details
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, price } = req.body;
    let product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    product.name = name;
    product.description = description;
    product.price = price;
    res.json(product);
};

// Deleting a product by its ID
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    products.splice(index, 1);
    res.status(204).send();
};
