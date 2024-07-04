import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ oneUser: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li className={css.container}>
      <div className="">
        <p className={css.name}>{name}</p>
        <p className={css.name}>{number}</p>
      </div>

      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
