import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";
import toast, { Toaster } from "react-hot-toast";

import * as Yup from "yup";

const notify = (text) => toast(text, { position: "center-right" });

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const userInputId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (event, actions) => {
    dispatch(register(event))
      .unwrap()
      .then(() => notify("Congratulations! You have registered an account"))
      .catch(() => notify("Oops... An error occurred. Try again"));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        className={css.container}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <label className={css.label} htmlFor={`${userInputId}-name`}>
            Name
            <Field id={`${userInputId}-name`} name="name" />
            <ErrorMessage className={css.error} component="span" name="name" />
          </label>

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
            Register
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}
