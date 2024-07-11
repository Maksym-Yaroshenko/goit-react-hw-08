import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

import css from "./ContactsPage.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectError } from "../../redux/contacts/selectors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const errorContactsBoolean = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.root}>
        <h1 className={css.phonebook}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {errorContactsBoolean && <ErrorMessage />}
        <ContactList />
      </div>
    </>
  );
}
