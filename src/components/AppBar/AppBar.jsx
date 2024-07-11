import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import css from "./AppBar.module.css";
import { selectisLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav /> */}
      {/* <UserMenu /> */}
    </header>
  );
}
