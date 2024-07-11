import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filtetContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filtetContacts.map((selectContact) => (
          <Contact key={selectContact.id} oneUser={selectContact} />
        ))}
      </ul>
    </>
  );
}
