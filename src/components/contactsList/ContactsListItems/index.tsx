import React, { FC } from 'react';

import ContactsListItem from '@components/contactsList/ContactsListItem';
import { IItem } from '@typings/contactsList';
import './style.sass';

interface IContactsListItems {
    items: IItem[];
}

const ContactsListItems: FC<IContactsListItems> = ({ items }) => (
    <div className="contacts-list__items">
        {items.map((item: IItem) => (
            <ContactsListItem item={item} key={item.id} />
        ))}
    </div>
);

export default ContactsListItems;
