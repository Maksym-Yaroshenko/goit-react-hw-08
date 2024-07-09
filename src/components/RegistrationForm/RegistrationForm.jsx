import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";

import css from "./RegistrationForm.module.css";

import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
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

export default function RegistrationForm() {
  const userInputId = useId();

  const handleSubmit = (event, actions) => {
    console.log(event);

    actions.resetForm();
  };

  return (
    <>
      <Formik
        className={css.container}
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <label className={css.label} htmlFor={`${userInputId}-username`}>
            Username
            <Field id={`${userInputId}-username`} name="username" />
            <ErrorMessage
              className={css.error}
              component="span"
              name="username"
            />
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
    </>
  );
}
