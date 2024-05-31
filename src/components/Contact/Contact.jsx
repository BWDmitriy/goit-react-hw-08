import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { ListItem, ListItemText, IconButton, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setOpen(false);
    toast.success('Contact deleted successfully!');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}