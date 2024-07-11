import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";

import css from "./LoginForm.module.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const notify = (text) => toast(text, { position: "right-center" });

export default function LoginForm() {
  const userInputId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (event, actions) => {
    dispatch(login(event))
      .unwrap()
      .then(() => {
        notify("Congratulations! You are logged in");
      })
      .catch(() => {
        notify("Oops... An error occurred. Try again");
      });

    actions.resetForm();
  };

  return (
    <>
      <Formik
        className={css.container}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <label className={css.label} htmlFor={`${userInputId}-email`}>
            Email
            <Field id={`${userInputId}-email`} name="email" />
            <ErrorMessage component="span" className={css.error} name="email" />
          </label>

          <label className={css.label} htmlFor={`${userInputId}-contact`}>
            Password
            <Field
              id={`${userInputId}-contact`}
              name="password"
              type="password"
            />
            <ErrorMessage
              className={css.error}
              component="span"
              name="password"
            />
          </label>

          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}
