import {
    TOGGLE_SHOW_INACTIVE,
    TOGGLE_SHOW_CHILDREN,
    REFRESH_PROCESS_LIST,
    SET_BASIC_LIST,
} from '../types/contactsList';
import { IBasicItem, IContactsListState, IItem } from '@typings/contactsList';

const initialState: IContactsListState = {
    basicList: [],
    processList: [],
    showInactive: true,
};

export const contactsListReducer = (state: IContactsListState = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_SHOW_INACTIVE:
            return {
                ...state,
                showInactive: action.payload,
            };
        case TOGGLE_SHOW_CHILDREN:
            const basicList: IBasicItem[] = state.basicList.map((item: IBasicItem) => {
                return item.id === action.payload.itemId
                    ? {
                          ...item,
                          showChildren: action.payload.value,
                      }
                    : item;
            });
            return {
                ...state,
                basicList,
            };
        case SET_BASIC_LIST:
            return {
                ...state,
                basicList: action.payload.map((item: IBasicItem) => {
                    return { ...item, showChildren: false };
                }),
            };
        case REFRESH_PROCESS_LIST:
            const items: IBasicItem[] = state.showInactive
                ? state.basicList
                : state.basicList.filter(
                      (item: IBasicItem) => item.isActive !== state.showInactive
                  );
            const processList: IItem[] = getProcessItems(items);
            return {
                ...state,
                processList,
            };
        default:
            return state;
    }
};

function getProcessItems(items: IBasicItem[], parentId: number = 0): IItem[] {
    return items.reduce((acc: IItem[], item: IItem) => {
        if (item.parentId === parentId) {
            const children = getProcessItems(items, item.id);
            return [...acc, children.length > 0 ? { ...item, children } : item];
        }
        return acc;
    }, []);
}
