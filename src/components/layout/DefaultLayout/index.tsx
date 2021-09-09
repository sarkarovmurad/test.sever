import React, { FC, ReactNode, ReactNodeArray } from 'react';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import './style.sass';

interface IDefaultLayout {
    children: string | ReactNode | ReactNodeArray;
    heading?: string;
}

const DefaultLayout: FC<IDefaultLayout> = ({ children, heading }) => (
    <div className="template">
        <Header />
        <main className="main">
            {heading && <h1 className="h1">{heading}</h1>}
            {children}
        </main>
        <Footer />
    </div>
);

export default DefaultLayout;
