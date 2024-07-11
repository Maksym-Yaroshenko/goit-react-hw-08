import css from "./App.module.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
// import { selectError, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // const loadingBoolean = useSelector(selectLoading);
  // const errorBoolean = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<RestrictedRoute components={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute components={<RegistrationPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute components={<ContactsPage />} />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
