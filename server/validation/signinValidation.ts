import Joi from 'joi';

const signinValidationSchema = ({
  email, password,
}) => {
  const schema = Joi.object({

    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is required',
      'string.email': 'Invalid Email',
    }),
    password: Joi.string().pattern(/^(?!.*[\s])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/).required().messages({
      'any.required': 'Password is required',
      'string.empty': 'Password is required',
      'string.pattern.base': 'Password must be at least 6 characters, and contain letters, digits and special characters only.',
    }),
  });
  return schema.validateAsync({
    email, password,
  });
};
export default signinValidationSchema;
