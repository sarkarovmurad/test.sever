import React, { FC } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import data from '@data/contactsList.json';
import { rootReducer } from '@model/reducers/root';
import DefaultLayout from '@components/layout/DefaultLayout';
import ContactsList from '@components/contactsList/ContactsList';

const store = createStore(rootReducer);

const Main: FC = () => {
    return (
        <Provider store={store}>
            <DefaultLayout heading="Contacts list">
                <ContactsList initItems={data} />
            </DefaultLayout>
        </Provider>
    );
};

export default Main;
