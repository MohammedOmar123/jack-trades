import * as yup from 'yup';

const updateUserValidation = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),

  bio: yup.string().label(' ').max(100).when('image', {
    is: (val: any) => !!val,
    then: yup.string(),
    otherwise: yup.string()
      .required('You have to update the image or the bio.'),
  }),
  image: yup.string()

    .when('bio', {
      is: (val: any) => !!val,
      then: yup.string(),
      otherwise: yup.string()
        .required('You have to update the image or the bio.'),
    }),
}, [['image', 'bio']]);
export default updateUserValidation;
