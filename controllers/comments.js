const comments = require('../data/comments');

const { v4: uuidv4 } = require('uuid');

// List 
const list = (req, res) => {
    res.json(comments)
}

// Show - one item
const show = (req, res) => {
    const {id} = req.params;
    const foundComment = comments.find((comment) => {
        return comment._id === Number(id);
    });
    res.json(foundComment)
}

// Create
const create = (req, res) => {
    const {body}  = req;
    // console.log(body.body)
    const comment = {
        "_id": uuidv4(), 
        ...body,
        postId: 1
    }
    comments.push(comment);
    // console.log(comments)
    res.json(comments)
}

module.exports = {
    list,
    show,
    create,
};