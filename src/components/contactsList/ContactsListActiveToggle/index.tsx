import React, { FC } from 'react';
import clsx from 'clsx';
import checkboxUrl from '@img/checkbox.svg';
import './style.sass';

interface IContactsListActiveToggle {
    showInactive: boolean;
    toggleShowInactive: () => void;
}

const ContactsListActiveToggle: FC<IContactsListActiveToggle> = ({
    showInactive,
    toggleShowInactive,
}) => (
    <button
        className={clsx(
            'contacts-list-active-toggle',
            showInactive && 'contacts-list-active-toggle--active'
        )}
        type="button"
        onClick={toggleShowInactive}
    >
        <span className="contacts-list-active-toggle__icon">
            <i
                className="contacts-list-active-toggle__checkbox"
                style={{ backgroundImage: `url(${checkboxUrl})` }}
            />
        </span>
        Show inactive items
    </button>
);

export default ContactsListActiveToggle;
