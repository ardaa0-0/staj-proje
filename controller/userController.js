const User = require('../models/User');

const createUser = async (req,res) => {
    const newUser = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    });

    res.status(201).json({
        status : 'success',
        data : {
            newUser
        }
    });
}

module.exports = {
    createUser
}