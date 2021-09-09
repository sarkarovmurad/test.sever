import React, { FC } from 'react';
import './style.sass';

const FooterContacts: FC = () => (
    <div className="footer-contacts">
        Contacts with me{' '}
        <a className="footer-contacts__link" href="mailto:sarkarovmurad@mail.ru">
            by email
        </a>
    </div>
);

export default FooterContacts;
