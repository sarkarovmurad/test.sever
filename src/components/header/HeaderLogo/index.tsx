import React, { FC } from 'react';
import logoUrl from '@img/logo.svg';
import './style.sass';

const HeaderLogo: FC = () => (
    <div className="header-logo">
        <img className="header-logo__img" src={logoUrl} alt="Logo of contacts list" />
        <div className="header-logo__text">Contacts List</div>
    </div>
);

export default HeaderLogo;
