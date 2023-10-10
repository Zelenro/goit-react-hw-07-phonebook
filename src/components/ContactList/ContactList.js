import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { EmptyMessage } from './emptyMessage';
import { ItemButton, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name} : {contact.phone}
          </p>
          <ItemButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </ItemButton>
        </ListItem>
      ))}
      {contacts && contacts.length === 0 && <EmptyMessage />}
    </List>
  );
};
