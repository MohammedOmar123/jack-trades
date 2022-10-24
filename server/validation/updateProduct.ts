import Joi from 'joi';

const validateUpdateData = Joi.object({
  id: Joi.number().min(1).required(),
  title: Joi.string().alphanum().required(),
  description: Joi.string().alphanum().required(),
});

export default validateUpdateData;
