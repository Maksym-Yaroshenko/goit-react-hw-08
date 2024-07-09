import css from "./App.module.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

function App() {
  const dispatch = useDispatch();

  // const loadingBoolean = useSelector(selectLoading);
  // const errorBoolean = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <div className={css.root}>
    //   <h1 className={css.phonebook}>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {loadingBoolean && <Loader />}
    //   {errorBoolean && <ErrorMessage />}
    //   <ContactList />
    // </div>

    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contacts"element={ } /> */}
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
