import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { refreshProcessList, toggleShowChildren } from '@model/actions/contactsList';
import ContactsListItems from '@components/contactsList/ContactsListItems';
import { IItem } from '@typings/contactsList';
import './style.sass';

interface IContactsListItem {
    item: IItem;
}

const ContactsListItem: FC<IContactsListItem> = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div
            className={clsx('contacts-list-item', !item.isActive && 'contacts-list-item--inactive')}
        >
            <div className="contacts-list-item__header">
                <div className="contacts-list-item__marker-area">
                    {item.children ? (
                        <button
                            className={clsx(
                                'contacts-list-item__children-toggle',
                                item.showChildren && 'contacts-list-item__children-toggle--active'
                            )}
                            type="button"
                            onClick={() => {
                                dispatch(toggleShowChildren(item.id, !item.showChildren));
                                dispatch(refreshProcessList());
                            }}
                        ></button>
                    ) : (
                        <div className="contacts-list-item__marker" />
                    )}
                </div>
                <div className="contacts-list-item__info">
                    {item.name}
                    {item['email'] && (
                        <>
                            {'\u00A0 '}(
                            <a className="contacts-list-item__email" href={`mailto:${item.email}`}>
                                {item.email}
                            </a>
                            )
                        </>
                    )}
                    {item['balance'] && (
                        <>
                            :{'\u00A0 '}
                            <b>{item.balance}</b>
                        </>
                    )}
                </div>
            </div>
            {item.children && item.showChildren && (
                <div className="contacts-list-item__children-wrap">
                    <ContactsListItems items={item.children} />
                </div>
            )}
        </div>
    );
};

export default ContactsListItem;
