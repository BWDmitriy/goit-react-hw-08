import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li key={id}>
      <div className="contact-list-div">
        <span><IoPerson />{" " + name}</span>
        <span><FaPhone />{" " + number}</span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}