import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from 'yup';

import "./SignIn.css";

export const SignIn = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });


  return (
    <div className="sign-in">
      <Formik 
          initialValues={{
              email: "",
              password: ""
          }}
          validationSchema={SignInSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
          >
            {({ errors, touched }) => (
                  <Form>
                    <div>
                      <h2 className="sign-in__title">Sign In</h2>
                    </div>
                    <div className="sign-in__email-content">
                      <label htmlFor="email" className="sign-in__email-label">
                        Email
                      </label>
                      <Field name="email" placeholder="Enter email" className="sign-in__password" />
                      <div className="sign-in__email-error sign-in__error">{errors.email && touched.email ? <p>* {errors.email}</p> : null}</div>
                    </div>
                    <div className="sign-in__password-content">
                      <label htmlFor="password" className="sign-in__password-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className="sign-in__password"
                        placeholder="Enter password"
                      />
                      <div className="sign-in__error">{errors.password && touched.password ? <p>* {errors.password}</p> : null}</div>
                    </div>
                    <div>
                      <button className="sign-in__button">Sign In</button>
                    </div>
                    <div className="sign-in__new-customer">
                      <p>
                        New customer?
                        <Link to="/sign-in" className="sign-in__create-account">
                          Create your account
                        </Link>
                      </p>
                    </div>
                  </Form>
            )}
      </Formik>
    </div>
  );
};
