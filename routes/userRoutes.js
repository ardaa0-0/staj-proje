const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const validate = require('../middlewares/validate');
const userValidation = require('../validations/user.validation');

router.get('/:id', validate(userValidation.userIdSchema, "params"), userController.getUserById);

module.exports = router;

