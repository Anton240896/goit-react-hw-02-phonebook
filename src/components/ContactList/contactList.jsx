import { Contact } from 'components/Contact/contact';
import { ContactListStyled } from './contactList.styled';

export const ContactList = ({ contactsBook, deleteContact }) => {
  return (
    <ContactListStyled>
      {contactsBook.map(({ id, name, phone }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListStyled>
  );
};
