import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectCurrentItem,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import EditForm from "../../components/EditForm/EditForm";

import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentItem = useSelector(selectCurrentItem);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <PageTitle>Your Contacts</PageTitle>
      {currentItem ? <EditForm /> : <ContactForm />}

      <span>{isLoading && "Request in progress"}</span>
      <SearchBox />
      <ContactList />
    </div>
  );
}
