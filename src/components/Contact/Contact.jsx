import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{ 
        borderBottom: '1px solid #ccc', 
        padding: '10px 0' 
      }}
    >
      <ListItemText
        primary={
          <Box display="flex" alignItems="center" gap={1}>
            <IoPerson />
            <Typography variant="body1" component="span">
              {name}
            </Typography>
          </Box>
        }
        secondary={
          <Box display="flex" alignItems="center" gap={1}>
            <FaPhone />
            <Typography variant="body2" component="span">
              {number}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
}