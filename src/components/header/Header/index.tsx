import React, { FC } from 'react';

import HeaderWithLove from '@components/header/HeaderWithLove';
import HeaderLogo from '@components/header/HeaderLogo';
import HeaderContacts from '@components/header/HeaderContacts';
import './style.sass';

const Header: FC = () => (
    <header className="header">
        <div className="header__wrapper">
            <div className="header__grid">
                <HeaderWithLove />
                <HeaderLogo />
                <HeaderContacts />
            </div>
        </div>
    </header>
);

export default Header;
