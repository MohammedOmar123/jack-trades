import Joi from 'joi';

const validateSighup = ({
  firstName, lastName, email, password, confirmPassword,
}) => {
  const schema = Joi.object({
    firstName: Joi.string().pattern(/^[a-zA-z]{2,20}$/).required().messages({
      'any.required': 'First name is a required field so be sure to fill it on',
      'string.empty': 'First name is a required field so be sure to fill it on',
      'string.pattern.base': 'First name must contains only letters and at least [2-20]',
    }),
    lastName: Joi.string().pattern(/^[a-zA-z]{2,20}$/).required().messages({
      'any.required': 'Last name is a required field so be sure to fill it on',
      'string.empty': 'Last name is a required field so be sure to fill it on',
      'string.pattern.base': 'Last name must contains only letters and at least [2-20]',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is a required field so be sure to fill it on',
      'string.empty': 'Email is a required field so be sure to fill it on',
      'string.email': "Please check your email again, this isn't valid email !",
    }),
    password: Joi.string().pattern(/^(?!.*[\s])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/).required().messages({
      'any.required': 'Password is a required field so be sure to fill it on',
      'string.empty': 'Password is a required field so be sure to fill it on',
      'string.pattern.base': 'Password must be at least 6 characters from letters,digits and special characters',

    }),
    confirmPassword: Joi.any().equal(Joi.ref('password')).required().label('Confirm password')
      .messages({
        'any.required': 'confirm Password is a required field so be sure to fill it on',
        'any.only': 'Passwords are\'nt matched',
      }),
  });
  return schema.validateAsync({
    firstName, lastName, email, password, confirmPassword,
  });
};

export default validateSighup;
