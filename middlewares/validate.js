module.exports = (schema, target = "body") => {
    return (req, res, next) => {
        
        const {error} = schema[target].validate(req[target]);

        if(error) {
            return res.status(400).json({
                type : 'Error',
                statusCode : 400,
                message : error.message
            })
        }

        next();
    };
};