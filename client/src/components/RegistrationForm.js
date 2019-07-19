import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import useLocalStorage from "../customhooks/useLocalStorage";
import axiosWithAuth from "../helpers/axiosWithAuth";

function RegistrationForm({ touched, errors }) {
  return (
    <div className="form-wrapper">
      <Form>
        <div className="form-group">
          <Field
            className="input"
            name="username"
            type="text"
            placeholder="username"
            autoComplete="off"
          />
          <p className="error-message">{touched.username && errors.username}</p>
        </div>
        <div className="form-group">
          <Field
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <p className="error-message">{touched.password && errors.password}</p>
        </div>
        <button>Submit</button>
      </Form>
    </div>
  );
}
export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is required.")
      .min(8, "Username must bo at least 8 characters."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must bo at least 8 characters.")
  }),

  handleSubmit(values, formikBag) {
    console.log(values, formikBag);

    axiosWithAuth()
      .post("api/register", values)
      .then(res => {
        // console.log("Props: ", formikBag.props);
        localStorage.setItem("token", res.data.token);
        // useLocalStorage()
        formikBag.props.updateIsToken(res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(RegistrationForm);
