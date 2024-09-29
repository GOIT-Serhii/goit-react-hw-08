import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.wrap}>
      <ul className={css.authNavList}>
        <li className={css.authNavItem}>
          <NavLink className={css.linkReg} to="/register">
            Sign up
          </NavLink>
        </li>
        <li className={css.authNavItem}>
          <NavLink className={css.linkLog} to="/login">
            <BsPersonCircle className={css.icon} />
            <span>Log In</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
