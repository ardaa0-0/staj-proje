const bookService = require('../services/bookService');

const addBook = async (req, res,next) => {

    try {
        const book = await bookService.addBook(req.body);

        res.status(201).json({ type: "success", book });
    } catch(error) {
        next(error);
    }
};


const updateBook = async (req, res, next) => {
    try {
        const book = await bookService.updateBook(
            req.params.id,
            req.body
        );

        res.status(200).json({type: "success",book});
    } catch(error) {
        next(error);
    }

};



module.exports = {
    addBook,
    updateBook
}