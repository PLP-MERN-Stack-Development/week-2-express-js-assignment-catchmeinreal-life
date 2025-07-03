const { getAll, getById, create, update, remove } = require('../models/productStore')


async function getProducts (req, res) {  // `GET /api/products`   return all products on request
    let products = getAll()
    res.send(products);
}
async function getProduct (req, res) { //  `GET /api/products/:id`  return a specific  product on request
    const productId = req.params.id;
    let product = await getById(productId)  
    if (!product) {
        return res.status(404).send({ message: 'Product not found' });
    }    
    res.send(product);
} 
async function createProduct (req, res) { // `POST /api/products`:  create a new product
    const newProductData = req.body;
    // newProduct.id = (products.length + 1).toString();  // Generate a new ID for the product
    const newProduct =  await create(newProductData);
    res.status(201).send(newProduct);
}
async function updateProduct (req, res) { //PUT /api/products/:id   update producte meta data
    const productId = req.params.id;
    const updatedProductData = req.body;    
    const updated = await update(productId, updatedProductData) // Update the product
    res.send("Product updated successfully!", updated); 
}

async function deleteProduct (req, res) {
    const productId = req.params.id;
    
    let response = await remove(productId);
    res.send({ message: 'Product deleted successfully', response: {...response}});
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct};