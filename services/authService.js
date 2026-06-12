const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const createUser = async (userBody) => {
    try {
        const userExists = await User.findOne({email : userBody.email});

        if(userExists) {
            return {
                type : 'Error',
                statusCode : 400,
                message : 'User already exists'
            }
        };

        const user = await User.create(userBody);

        const token = generateToken(user._id);

        return {
            type : 'Success',
            statusCode : 201,
            user,
            token
        }

    }catch (error) {
        console.log(error);
    }
}


const loginUser = async (userBody) => {

    try {
        
    const {email, password} = userBody;

    const user = await User.findOne({email});

    if(!user || !(await user.comparePassword(password))) {
        return {
            type : 'Error',
            statusCode : 401,
            message : 'Invalid email or password'
        }
    }

    const token = generateToken(user._id);

    return {
        type : 'Success',
        statusCode : 200,
        message : 'login successful',
        user,
        token
    }


    }catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    loginUser
}