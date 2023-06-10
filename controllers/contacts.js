const contacts = require('../data/contacts');
const { v4: uuidv4 } = require('uuid');

// List 
const list = (req, res) => {
    res.json(contacts)
}

// Show - one item
const show = (req, res) => {
    const {id} = req.params;
    const foundContacts = contacts.find((contacts) => {
        return contacts._id === Number(id);
    });
    res.json(foundContacts)
}

// Create
const create = (req, res) => {
    const {body}  = req;
    // console.log(body.body)
    const createObj = {
        "_id": uuidv4(), 
        // "name": name,
        // "occupation": ,
        // "avatar",
         ...body,
        postId: 1
       
    };
    contacts.push(createObj);
    // console.log(contacts)
    res.json(createObj)
}

module.exports = {
    list,
    show,
    create,
};