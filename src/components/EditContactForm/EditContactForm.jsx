import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactsOps';
import { TextField, Button, Box, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(updateContact({ id: contact.id, updates: values }));
        onClose();
        toast.success('Contact updated successfully!');
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2} maxWidth={400} mx="auto">
            <Typography variant="h6">Edit Contact</Typography>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            <TextField
              id="number"
              name="number"
              label="Number"
              value={values.number}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default EditContactForm;