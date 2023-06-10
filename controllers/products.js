const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');

// List 
const list = (req, res) => {
    res.json(products)
}

// Show - one item
const show = (req, res) => {
    const {id} = req.params;
    const foundProduct = products.find((product) => {
        return product._id === Number(id);
    });
    res.json(foundProduct)
}

// Create
const create = (req, res) => {
    const {body}  = req;
    // console.log(body.body)
    const createObj = {
        "_id": uuidv4(), 
        ...body,
        postId: 1
    }
    products.push(createObj);
    // console.log(products)
    res.json(createObj)
}

module.exports = {
    list,
    show,
    create,
};