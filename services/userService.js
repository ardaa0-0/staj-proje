const User = require('../models/User');

const getUser = async (userId) => {
    try {

        if(!userId) {
            return {
                type : 'Error',
                statusCode : 400,
                message : 'User ID is required'
            }
        }

        const user = await User.findById(userId);

        if(!user) {
            return {
                type : 'Error',
                statusCode : 404,
                message : 'User not found'
            }
        }

        return {
            type : 'Success',
            statusCode : 200,
            user
        }
    } catch (error) {
        console.log(error);
    }
} 

module.exports = {
    getUser
}