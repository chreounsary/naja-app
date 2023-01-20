import * as Yup from 'yup';

export function signupValidate(value){
  const errors = {}
  if(!value.name){
    errors.name = 'Requied'
  } 
  if(!value.email) {
    errors.email = 'Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    errors.email = 'Invalid email address';
  }
  if(!value.password) {
    errors.password = 'Invalid password'
  }
  return errors;
}

export function loginValidate(value) {
  const errors = {};
  if(!value.email) {
    errors.email = 'Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    errors.email = 'Invalid email address';
  }
  if(!value.password) {
    errors.password = 'Required'
  }else if(value.password.length < 5 || value.password.length > 12) {
    errors.password = 'Invalid password'
  }else if(value.password.includes('')){
    errors.password = 'Invalid password'
  }
  return errors;
}

export const LoginSchemaValidate = Yup.object().shape({
  email: Yup.string()
    .required('This field is required')
    .email('Should be a valid email'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Should be atleast 6 characters'),
});
