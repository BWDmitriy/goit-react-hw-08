import React from 'react';
import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { List, Box } from '@mui/material';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Box mt={2}>
      <List sx={{ 
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'background.paper', 
        margin: '0 auto' 
      }}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </List>
    </Box>
  );
}