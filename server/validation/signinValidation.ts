import Joi from 'joi';
import { CustomError } from '../helpers';

const signinValidationSchema = ({ email, password }) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required().min(6),
    password: Joi.string().pattern(/^(?!.*[\s])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/).required()
      .messages({
        'string.empty': '"a" cannot be an empty field',
        'string.min': '"a" should have a minimum length of 6',
        'any.required': '"a" is a required field',
        'string.pattern.base': 'Password must be at least 6 characters from letters,digits and special characters',
      }),
  });

  try {
    return schema.validateAsync({ email, password });
  } catch (error) {
    throw new CustomError(400, 'validation error in signin');
  }
};

export default signinValidationSchema;
