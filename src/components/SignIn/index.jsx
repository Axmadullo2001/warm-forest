import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles.module.scss";
import { schema } from "../../utils/validationSchema";

export const SignIn = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const data = []
  let navigate = useNavigate();

  const onSubmit = item => {
    if (item.email && item.password) {
      navigate("/")
    }
  }

  return (
    <>
        <Header />
        <div className={styles.login}>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <h2 className={styles.login__title}>Sign In</h2>
                  </div>
                  <div className={styles.login__email_content}>
                    <label htmlFor="Email" className={styles.login__email_label}>
                      Email
                    </label>
                    <input
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                          placeholder="Enter email"
                          className={styles.login__password}
                        />
                    <div className={`${styles.login__email_error} ${styles.login__error}`}>
                        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                    </div>
                  </div>
                  <div className={styles.login__password_content}>
                    <label htmlFor="Password" className={styles.login__password_label}>
                      Password
                    </label>
                    <input
                      {...register("password",  { required: "Password is required" })}
                      aria-invalid={errors.mail ? "true" : "false"}
                      className={styles.login__password}
                      placeholder="Enter password"
                    />
                    <div className={styles.login__error}>
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                      </div>
                  </div>
                  <div>
                    <button type="submit" className={styles.login__button}>Sign In</button>
                  </div>
                  <div className={styles.login__validation}></div>
                  <p>{ data }</p>
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
