import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { List, Box, Typography } from '@mui/material';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Box mt={2}>
      {/* <Typography variant="h6" component="div" gutterBottom>
        Contact List
      </Typography> */}
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