import Joi from 'joi';

const updateUserProfileValidation = Joi.object({
  bio: Joi.string(),
  image: Joi.string().pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpeg|jpg|gif|png)/i).messages({
    'string.pattern.base': 'Add a valid URL and only these extensions [jpeg,jpg,git,png] are allowed ',
  }),
}).or('bio', 'image');

export default updateUserProfileValidation;
