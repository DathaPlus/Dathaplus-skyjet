/* eslint-disable camelcase */
import * as Yup from 'yup';

export const formValidationScheme = Yup.object({
  full_name: Yup.string().trim().required('name is required'),
  email: Yup.string().email('Invalid email*'),
  phone: Yup.string().trim().required('phone is required'),
  address: Yup.string().trim().required('address is required'),
  city: Yup.string().trim().required('city is required'),
  zip_code: Yup.string().trim().required('zip code is required'),
  itinerary: Yup.string().trim().required('itinerary is required'),
});
