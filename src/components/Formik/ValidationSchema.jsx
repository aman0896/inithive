import * as yup from "yup";

export const formValidation = yup.object().shape({
  form_name: yup.string().required("Name is required"),
  form_email: yup.string().required("Email is required").email("Invalid Email"),
  company_name: yup.string().required("Company name is required"),
  contact_number: yup.string().required("Phone number is required"),
  form_message: yup.string().required("Message is required"),
});
