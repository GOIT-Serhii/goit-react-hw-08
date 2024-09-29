import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./HomePage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.homeContainer}>
      <PageTitle className={css.title}> Welcome to ContactBook!</PageTitle>
      <p className={css.text}>
        Keep all your contacts organized and within reach! With ContactBook,
        store, manage, and access all your essential contact details
        effortlessly—whether you're on the go or at your desk. Say goodbye to
        the hassle of losing important numbers or emails!
      </p>
      <p className={css.text}>
        Enjoy a sleek and intuitive interface that makes categorizing and
        searching your contacts a breeze. Your information stays secure, while
        you stay connected and organized—anytime, anywhere.
      </p>
      {!isLoggedIn && (
        <p className={`${css.text} ${css.loggedInText}`}>
          Not logged in yet? Sign up or log in now to unlock the full power of
          ContactBook. Managing your contacts has never been easier!
        </p>
      )}
    </div>
  );
}
