const joi = require('joi');

const userIdSchema = {
    params: joi.object({
        id: joi.string()
        .required()
        .length(24)
        .messages({
            'string.base': 'User ID should be a string',
            "string.length": 'User ID must be 24 characters long',
            'string.empty': 'User ID cannot be empty',
            'any.required': 'User ID is required'
        })
    })
}

module.exports = {
    userIdSchema
};