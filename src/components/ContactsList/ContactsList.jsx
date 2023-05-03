import React from 'react';
import css from 'components/ContactsList/ContactsList.module.css';
import PropTypes from 'prop-types';

export function ContactsList({contacts, deleteContact}) {
  console.log(contacts)
    return (
    <ul className={css.contactsList}>
        {contacts.map(contact => {
            return (
                <li key={contact.id} className={css.contactsItem}>
                    <div>
                    <span className={css.contactsItemName}>{contact.name}</span>:
                    <span className={css.contactsItemNumber}> {contact.number}</span>
                    </div>
                    <button className={css.contactsItemButton} onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
}