import {useReducer,useState} from 'react';
import {reducer,initialState} from './reducer';
import ContactForm from './FormContact';
import ContactList from './ContactList';
const ContactApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [contactToEdit, setContactToEdit] = useState(null);
     return (
    <div>
      <h1>Contact Manager</h1>

      <ContactForm
        dispatch={dispatch}
        editingContact={contactToEdit}
        setEditingContact={setContactToEdit}
      />

      <ContactList
        contacts={state.contacts}
        dispatch={dispatch}
        setEditingContact={setContactToEdit}
      />
    </div>
  );
};

export default ContactApp;