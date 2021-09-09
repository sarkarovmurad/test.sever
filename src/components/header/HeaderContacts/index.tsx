import React, { FC } from 'react';
import phoneUrl from '@img/phone.svg';
import './style.sass';

const HeaderContacts: FC = () => (
    <a className="header-contacts" href="tel:89508673055">
        <div className="header-contacts__icon" style={{ backgroundImage: `url(${phoneUrl})` }} />
        +7 (950) 867-30-55
    </a>
);

export default HeaderContacts;
