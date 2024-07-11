import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
}
