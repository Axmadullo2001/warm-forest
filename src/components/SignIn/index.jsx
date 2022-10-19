import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { users } from "../../mocks/users";
import Header from "../Header";
import Footer from "../Footer";

import { SignInSchema } from "../../utils/validationSchema";

import login from "./SignIn.module.scss";

export const SignIn = () => {
  let navigate = useNavigate();
  let error = ''

  return (
    <>
        <Header />
        <div className={login.login}>
          <Formik 
              initialValues={{
                  email: "",
                  password: ""
              }}
              validationSchema={SignInSchema}
              onSubmit={values => {
                if (values.email && values.password) {
                  navigate("/")
                }
              }}
              >
                {({ errors, touched }) => (
                      <Form>
                        <div>
                          <h2 className={login.login__title}>Sign In</h2>
                        </div>
                        <div className={login.login__email_content}>
                          <label htmlFor="email" className={login.login__email_label}>
                            Email
                          </label>
                          <input name="email" placeholder="Enter email" className={login.login__password} />
                          <div className={`${login.login__email_error} ${login.login__error}`}>{errors.email && touched.email ? <p>* {errors.email}</p> : null}</div>
                        </div>
                        <div className={login.login__password_content}>
                          <label htmlFor="password" className={login.login__password_label}>
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className={login.login__password}
                            placeholder="Enter password"
                          />
                          <div className={login.login__error}>{errors.password && touched.password ? <p>* {errors.password}</p> : null}</div>
                        </div>
                        <div>
                          <button className={login.login__button}>Sign In</button>
                        </div>
                        <div className={login.login__validation}>{error ? <p>{ error }</p>  : null }</div>
                        <div className={login.login__new_customer}>
                          <p>
                            New customer?
                            <Link to="/login" className={login.login__create_account}>
                              Create your account
                            </Link>
                          </p>
                        </div>
                      </Form>
                )}
          </Formik>
        </div>
        <Footer />
    </>
  );
};
