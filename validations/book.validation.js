const joi = require('joi');

const bookAddSchema = {
    body: joi.object({
        title: joi.string()
            .required()
            .min(3)
            .max(100)
            .messages({
                'string.base': 'Title should be a string',
                'string.empty': 'Title cannot be empty',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title cannot be longer than 100 characters'
            }),

        author: joi.string()
            .required()
            .min(3)
            .messages({
                'string.base': 'Author should be a string',
                'string.empty': 'Author cannot be empty',
                'string.min': 'Author must be at least 3 characters long'
            }),

        category: joi.string()
            .required()
            .min(3)
            .messages({
                'string.base': 'Category should be a string',
                'string.empty': 'Category cannot be empty',
                'string.min': 'Category must be at least 3 characters long'
            }),

        stock: joi.number()
            .required()
            .min(0)
            .messages({
                'number.base': 'Stock should be a number',
                'number.min': 'Stock must be a positive number',
                'number.empty' : 'Stock cannot be empty'
            }),

        pageCount: joi.number()
            .required()
            .min(1)
            .messages({
                'number.base': 'Page count should be a number',
                'number.min': 'Page count must be a positive number',
                "number.empty" : 'Page count cannot be empty'
            })
    })
};

const bookUpdateSchema = {
    body: joi.object({
        title: joi.string()
            .min(3)
            .max(100)
            .messages({
                'string.base': 'Title should be a string',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title cannot be longer than 100 characters'
            }),

        author: joi.string()
            .min(3)
            .messages({
                'string.base': 'Author should be a string',
                'string.min': 'Author must be at least 3 characters long'
            }),

        category: joi.string()
            .min(3)
            .messages({
                'string.base': 'Category should be a string',
                'string.min': 'Category must be at least 3 characters long'
            }),

        stock: joi.number()
            .min(0)
            .messages({
                'number.base': 'Stock should be a number',
                'number.min': 'Stock must be a positive number'
            }),

        pageCount: joi.number()
            .min(1)
            .messages({
                'number.base': 'Page count should be a number',
                'number.min': 'Page count must be a positive number'
            })
    }).min(1).required().messages({
        'object.min': 'At least one field must be provided for update',
        'any.required': 'At least one field must be provided for update'
    })
};

const bookIdSchema = {
    params: joi.object({
        id: joi.string()
            .required()
            .length(24)
            .messages({
                'string.base': 'Book ID should be a string',
                'string.length': 'Book ID must be 24 characters long',
                'string.empty': 'Book ID cannot be empty',
                'any.required': 'Book ID is required'
            })
    })
};

const bookQuerySchema = {
    query: joi.object({
        page: joi.number()
            .integer()
            .min(1)
            .default(1)
            .messages({
                'number.base': 'Page should be a number',
                'number.min': 'Page must be a positive integer'
            }),
        limit: joi.number()
            .integer()
            .min(1)
            .max(10)
            .default(10)
            .messages({
                'number.base': 'Limit should be a number',
                'number.min': 'Limit must be a positive integer',
                'number.max': 'Limit cannot exceed 10'
            })
    })
};

module.exports = {
    bookAddSchema,
    bookUpdateSchema,
    bookIdSchema,
    bookQuerySchema
};