const authService = require('../services/authService');
const userService = require('../services/userService');
const tokenService = require('../services/tokenService');

const register = async (req, res, next) => { 
    try {
        const user = await userService.createUser(req.body);
    
        const token = tokenService.generateAuthTokens(user);
    
        return res.status(201).json({user, token});
    }catch(error) {
        next(error);
    }
}

const login = async (req,res, next) => {
    try {
        const user = await authService.loginUser(req.body);
    
        const token = tokenService.generateAuthTokens(user);
        return res.status(200).json({user, token});
    }catch (error) {
        next(error);
    }

}


module.exports = {
    register,
    login
}