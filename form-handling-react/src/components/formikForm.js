import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Handle form submission
  const onSubmit = (values) => {
    console.log("Form data:", values);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label>Username:</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter username"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Email:</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Password:</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ padding: "10px 20px" }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
