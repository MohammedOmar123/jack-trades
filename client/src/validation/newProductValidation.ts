import * as yup from 'yup';

const validateProduct = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  gallery: yup.array().of(yup.string()),
  category_id: yup.number().required(),
});

export default validateProduct;
