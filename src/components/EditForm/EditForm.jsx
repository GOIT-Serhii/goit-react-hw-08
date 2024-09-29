import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentItem } from "../../redux/contacts/selectors";
import { changeContact } from "../../redux/contacts/operations";

import css from "./EditForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 15 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .matches(/^\+?[\d-]+$/, "Must contain only numbers and dashes!")
    .required("This field is required!"),
});

export default function EditForm() {
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);

  return (
    <div>
      <Formik
        initialValues={{
          name: currentItem.name,
          number: currentItem.number,
        }}
        validationSchema={UserSchema}
        onSubmit={(values, action) => {
          toast.promise(
            dispatch(
              changeContact({
                id: currentItem.id,
                name: values.name,
                number: values.number,
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
            CHANGE
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
