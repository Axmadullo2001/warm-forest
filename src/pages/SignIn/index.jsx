import React from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./styles.module.scss";

export const SignIn = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  let navigate = useNavigate();

  const onSubmit = () => {
    navigate("/")
  };

  return (
    <>
        <Header />
        <div className={styles.login}>
              <form onSubmit={ handleSubmit(onSubmit)}>
                  <div>
                    <h2 className={styles.login__title}>Sign In</h2>
                  </div>
                  <div className={styles.login__email_content}>
                    <label htmlFor="Email" className={styles.login__email_label}>
                      Email
                    </label>
                    <input
                            { ...register("email", {
                              required: true,
                              maxLength: 20
                            })}
                          placeholder="Enter email"
                              className={styles.login__password}
                        />
                    <div className={`${styles.login__email_error} ${styles.login__error}`}>
                        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                        {errors?.email?.type === "maxLength" && (
                          <p>Email address can not exceed 20 characters</p>
                        )}
                    </div>
                  </div>
                  <div className={styles.login__password_content}>
                    <label htmlFor="Password" className={styles.login__password_label}>
                      Password
                    </label>
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: 4,
                        maxLength: 20
                      })}
                        type="password"
                        className={styles.login__password}
                        placeholder="Enter password"
                    />
                    <div className={styles.login__error}>
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                        {errors?.password?.type === "minLength" && (
                          <p>Password can not be less 4 characters</p>
                        )}
                        {errors?.password?.type === "maxLength" && (
                          <p>Password can not exceed 20 characters</p>
                        )}
                      </div>
                  </div>
                  <div>
                    <button type="submit" className={styles.login__button}>Sign In</button>
                  </div>
                  <div className={styles.login__validation}></div>
                  <div className={styles.login__new_customer}>
                      <p>
                        New customer?
                        <Link to="/sign-in" className={styles.login__create_account}>
                          Create your account
                        </Link>
                      </p>
                  </div>
              </form>
        </div>
        <Footer />
    </>
  );
};
