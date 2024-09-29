import { useDispatch, useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.textUserName}>
        Welcome,<span className={css.userName}>{user.name}</span>{" "}
      </p>
      <button
        className={css.btnLogout}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        <CiLogout className={css.icon} />
        Logout
      </button>
    </div>
  );
}
