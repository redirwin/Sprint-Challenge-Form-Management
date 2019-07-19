import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function RegistrationForm({ touched, errors }) {
  return (
    <div className="form-wrapper">
      <Form>
        <div className="form-group">
          <Field
            className="input"
            name="userName"
            type="text"
            placeholder="username"
            autoComplete="off"
          />
          <p className="error-message">{touched.userName && errors.userName}</p>
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
      userName: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .required("Username is required.")
      .min(8, "Username must bo at least 8 characters."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must bo at least 8 characters.")
  }),

  handleSubmit(values, formikBag) {
    console.log(values);
    //   axiosWithAuth()
    //     .post("/api/friends", values)
    //     .then(res => {
    //       formikBag.props.updateFriends(res.data);
    //       formikBag.resetForm();
    //       formikBag.setSubmitting();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
  }
})(RegistrationForm);
