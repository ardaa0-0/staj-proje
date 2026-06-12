const authService = require('../services/authService');

const register = async (req, res) => { 
    const {type, statusCode, message, user, token} = await authService.createUser(req.body);

    if(type === 'Error') {
        return res.status(statusCode).json({message});
    }
    
    return res.status(statusCode).json({type, user, token});
}

const login = async (req,res) => {
    const {type, statusCode, message, user, token} = await authService.loginUser(req.body);

    if(type === 'Error') {
        return res.status(statusCode).json({message});
    }

    return res.status(statusCode).json({type, message, user, token});
}



module.exports = {
    register,
    login
}