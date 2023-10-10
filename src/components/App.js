import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';

import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { serviceContacts } from 'redux/operations';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';
import { FormUser } from './ContactForm/ContactForm';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(serviceContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phone book</h1>
      <FormUser />
      <h2>Contacts</h2>
      {isLoading && !error && (
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Loading...
        </p>
      )}
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
