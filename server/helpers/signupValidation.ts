import Joi from 'joi';

const validateSighup = ({
  firstName, lastName, email, password, confirmPassword,
}) => {
  const schema = Joi.object({
    firstName: Joi.string().pattern(/^[a-zA-z]{2,20}$/).required().messages({
      'string.pattern.base': 'First name must contains only letters and at least [2-20]',
      'string.empty': 'First name is a required field so be sure to fill it on',
    }),
    lastName: Joi.string().pattern(/^[a-zA-z]{2,20}$/).required().messages({
      'string.pattern.base': 'Last name must contains only letters and at least [2-20]',
      'string.empty': 'Last name is a required field so be sure to fill it on',
    }),
    email: Joi.string().email().required().messages({
      'string.email': "Please check your email again, this isn't valid email !",
      'string.empty': 'Email is a required field so be sure to fill it on',
    }),
    password: Joi.string().pattern(/^(?!.*[\s])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/).required().messages({
      'string.pattern.base': 'Password must be at least 6 characters from letters,digits and special characters',
      'string.empty': 'Password is a required field so be sure to fill it on',

    }),
    confirmPassword: Joi.any().equal(Joi.ref('password')).required().label('Confirm password')
      .messages({
        'any.only': 'Passwords are\'nt matched',
      }),
  });
  return schema.validateAsync({
    firstName, lastName, email, password, confirmPassword,
  });
};

export default validateSighup;
