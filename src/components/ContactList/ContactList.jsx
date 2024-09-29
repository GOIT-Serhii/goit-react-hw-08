import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li className={css.contactsItem} key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
