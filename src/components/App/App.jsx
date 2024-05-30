import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Searchbox from "../Searchbox/Searchbox";
import { fetchContacts } from '../../redux/contactsOps';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Searchbox />
      <ContactList />
    </div>
  );
};

export default App;