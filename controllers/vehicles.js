const vehicles = require('../data/vehicles');

const { v4: uuidv4 } = require('uuid');

// List 
const list = (req, res) => {
    res.json(vehicles)
}

// Show - one item
const show = (req, res) => {
    const {id} = req.params;
    const foundVehicle = vehicles.find((vehicle) => {
        return vehicle._id === Number(id);
    });
    res.json(foundVehicle)
}

// Create
const create = (req, res) => {
    const {body}  = req;
    // console.log(body.body)
    const vehicle = {
        "_id": uuidv4(), 
        ...body,
        postId: 1
    }
    vehicles.push(vehicle);
    // console.log(vehicles)
    res.json(vehicles)
}

module.exports = {
    list,
    show,
    create,
};