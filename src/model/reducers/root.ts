import { combineReducers } from 'redux';
import { contactsListReducer } from './contactsList';

export const rootReducer = combineReducers({
    contactsList: contactsListReducer,
});
