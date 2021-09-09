import React, { FC, ReactNode, ReactNodeArray } from 'react';
import './style.sass';

interface IContactsListHeader {
    children: string | ReactNode | ReactNodeArray;
}

const ContactsListHeader: FC<IContactsListHeader> = ({ children }) => (
    <div className="contacts-list-header">{children}</div>
);

export default ContactsListHeader;
