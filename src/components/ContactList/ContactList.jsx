import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}