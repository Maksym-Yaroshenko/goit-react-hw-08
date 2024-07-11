import { useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

import css from "./Layout.module.css";
import { selectRegistrationIsLoading } from "../../redux/auth/selectors";
import { selectLoading } from "../../redux/contacts/selectors";

export default function Layout({ children }) {
  const loadingAuthBoolean = useSelector(selectRegistrationIsLoading);
  const loadingContactsBoolean = useSelector(selectLoading);
  return (
    <div className={css.container}>
      <AppBar />
      {loadingContactsBoolean || (loadingAuthBoolean && <Loader />)}
      {children}
    </div>
  );
}
