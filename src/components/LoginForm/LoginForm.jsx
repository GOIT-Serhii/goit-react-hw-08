import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { selectIsLoading } from "../../redux/auth/selectors";
import { logIn } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>

        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
        </label>

        <button type="submit" disabled={isLoading} className={css.logInBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
