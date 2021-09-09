import React, { FC, ReactNode, ReactNodeArray } from 'react';
import './style.sass';

interface IContactsListBody {
    children: string | ReactNode | ReactNodeArray;
}

const ContactsListBody: FC<IContactsListBody> = ({ children }) => (
    <div className="contacts-list__body">{children}</div>
);

export default ContactsListBody;
