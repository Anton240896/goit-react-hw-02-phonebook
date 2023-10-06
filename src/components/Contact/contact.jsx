import { ContactContainer, ContactName } from './contact.styled';

export const Contact = ({ id, name, phone, deleteContact }) => {
  return (
    <ContactContainer>
      <ContactName>
        {name}: {phone}
      </ContactName>
      <button id={id} type="button" onClick={deleteContact}>
        Delete
      </button>
    </ContactContainer>
  );
};
