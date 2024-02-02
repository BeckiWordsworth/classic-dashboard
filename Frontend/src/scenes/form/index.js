import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/common/Header";

const initialValues = {
  firstName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup.string().matcges(phoneRegEx, "Phone number is not valid").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}></Formik>
    </Box>
  );
};

export default Form;
