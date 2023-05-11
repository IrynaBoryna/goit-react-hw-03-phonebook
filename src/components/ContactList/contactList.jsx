import css from './contactList.module.css';
import { Item } from '../ContactListOne/contactListOne';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
       <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <Item
          id={id}
          number={number}
          name={name}
          onClick={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  onDeleteContact: PropTypes.func,
};