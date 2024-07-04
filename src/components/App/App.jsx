import css from "./App.module.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();

  const loadingBoolean = useSelector(selectLoading);
  const errorBoolean = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.root}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loadingBoolean && <Loader />}
      {errorBoolean && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;
