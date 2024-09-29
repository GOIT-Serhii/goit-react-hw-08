import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/operations";

import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.input} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.btnRegister}>
          {" "}
          Register
        </button>
      </Form>
    </Formik>
  );
}
