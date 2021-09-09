import React, { FC } from 'react';

import FooterContacts from '@components/footer/FooterContacts';
import FooterCopyright from '@components/footer/FooterCopyright';
import './style.sass';

const Footer: FC = () => (
    <footer className="footer">
        <div className="footer__grid">
            <div className="footer__cell footer__cell--contacts">
                <FooterCopyright />
            </div>
            <div className="footer__cell footer__cell--copyright">
                <FooterContacts />
            </div>
        </div>
    </footer>
);

export default Footer;
