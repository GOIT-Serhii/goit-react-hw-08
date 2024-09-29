import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.wrap}>
      <PageTitle>Register your accout</PageTitle>
      <RegistrationForm />
    </div>
  );
}
