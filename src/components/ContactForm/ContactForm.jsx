import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoPersonAdd } from "react-icons/io5";

import CountrySelect from "../CountrySelect";
import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 15 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .matches(/^[\d-]+$/, "Must contain only numbers and dashes!")
    .required("This field is required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const [countryCode, setCountryCode] = useState("");

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={UserSchema}
        onSubmit={(values, action) => {
          toast.promise(
            dispatch(
              addContact({
                name: values.name,
                number: `+${countryCode}-${values.number}`,
              })
            ),
            {
              loading: "Saving...",
              success: <b>Contact saved!</b>,
              error: <b>Make sure you typed everything correct</b>,
            }
          );

          action.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label>Name:</label>

            <Field type="text" className={css.input} name="name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <CountrySelect setCountryCode={setCountryCode} />

          <div className={css.formGroup}>
            <label>Number:</label>
            <Field type="tel" className={css.input} name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <button className={css.btnSmt} type="submit">
            <IoPersonAdd />
            Add Contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
