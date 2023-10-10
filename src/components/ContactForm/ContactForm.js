import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from 'redux/operations';
import { ContactForm, ErrorMsg, FieldForm, Main } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  phone: yup
    .string()
    .min(5, 'Too short  phone number')
    .max(12, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

export const FormUser = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const { name, phone } = values;

    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      toast.error(`${name} already exists.`);
      resetForm();
      return;
    }

    dispatch(addContact({ name, phone }));

    toast.success(`${name} has been successfully added to your phonebook`);
    resetForm();
  };

  return (
    <Main
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm>
        <label htmlFor="name">
          Name
          <FieldForm
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMsg name="name" component="p" />
        </label>

        <label htmlFor="phone">
          Phone number
          <FieldForm type="tel" name="phone" required />
          <ErrorMsg name="phone" component="p" />
        </label>
        <button type="submit">Add to contact</button>
        <Toaster />
      </ContactForm>
    </Main>
  );
};
