const Joi = require('joi');

const createOrUpdate = Joi.object({
  content: Joi.string().allow(''),
  done: Joi.bool().default(false),
});

const objectId = Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i);
const idParam = Joi.object({ id: objectId });

module.exports = {
  createOrUpdate,
  idParam
}
