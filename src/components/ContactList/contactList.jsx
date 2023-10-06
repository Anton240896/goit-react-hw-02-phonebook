import { Contact } from 'components/Contact/contact';
import { ContactItem } from './contactList.styled';

export const ContactList = ({ contactsBook, deleteContact }) => {
  return (
    <div>
      {contactsBook.map(({ id, name, phone }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};
