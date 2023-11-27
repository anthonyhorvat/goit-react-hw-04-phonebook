import {
  ContactListElement,
  ContactElement,
  DeleteButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListElement>
      {contacts.map(contact => (
        <ContactElement key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ContactElement>
      ))}
    </ContactListElement>
  );
};

export default ContactList;
