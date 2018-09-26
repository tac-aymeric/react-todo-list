const express = require('express');
const validation = require('express-joi-validation')();
const todoValidation = require('./todo-validation.js');

const router = express.Router();

const { asyncHandler } = require('./utils.js');

const controllers = require('./todo-controllers.js');

router.get('/',
  asyncHandler(controllers.retrieve)
);
router.post('/',
  validation.body(todoValidation.createOrUpdate),
  asyncHandler(controllers.create)
);
router.put('/:id',
  validation.params(todoValidation.idParam),
  validation.body(todoValidation.createOrUpdate),
  asyncHandler(controllers.update)
);

module.exports = router;
