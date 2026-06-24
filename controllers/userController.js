const userService = require('../services/userService');

const getUserById = async (req,res,next) => {

    try {
        const user = await userService.getUser(req.params.id);
        res.status(200).json({user});
    } catch (error) {
        next(error);
    }
} 

module.exports = {
    getUserById
}