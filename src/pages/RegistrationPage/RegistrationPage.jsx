import PageTitle from "../../components/PageTitle/PageTitle";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.wrap}>
      <PageTitle>Register your accout</PageTitle>
      <RegisterForm />
    </div>
  );
}
