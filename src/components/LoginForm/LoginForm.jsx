import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";

import css from "./LoginForm.module.css";

import * as Yup from "yup";

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

export default function LoginForm() {
  const userInputId = useId();

  const handleSubmit = (event, actions) => {
    console.log(event);

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
    </>
  );
}
