import React, { FC, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import { toggleShowInactive, refreshProcessList, setBasicList } from '@model/actions/contactsList';
import ContactsListHeader from '@components/contactsList/ContactsListHeader';
import ContactsListBody from '@components/contactsList/ContactsListBody';
import ContactsListActiveToggle from '@components/contactsList/ContactsListActiveToggle';
import ContactsListItems from '@components/contactsList/ContactsListItems';
import Loader from '@components/ui/Loader';
import { IContactsListState, IInitItem, IItem } from '@typings/contactsList';
import './style.sass';

interface IContactsList {
    initItems: IInitItem[];
    processList: IItem[];
    showInactive: boolean;
}

const ContactsList: FC<IContactsList> = ({ initItems, processList, showInactive }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBasicList(initItems));
        dispatch(refreshProcessList());
    }, []);

    if (processList.length === 0) {
        return <Loader />;
    }

    return (
        <div className="contacts-list">
            <ContactsListHeader>
                <ContactsListActiveToggle
                    showInactive={showInactive}
                    toggleShowInactive={() => {
                        showInactive
                            ? dispatch(toggleShowInactive(false))
                            : dispatch(toggleShowInactive(true));
                        dispatch(refreshProcessList());
                    }}
                />
            </ContactsListHeader>
            <ContactsListBody>
                <ContactsListItems items={processList} />
            </ContactsListBody>
        </div>
    );
};

const mapStateToProps = (state: { contactsList: IContactsListState }) => {
    return {
        processList: state.contactsList.processList,
        showInactive: state.contactsList.showInactive,
    };
};

export default connect(mapStateToProps, null)(ContactsList);
