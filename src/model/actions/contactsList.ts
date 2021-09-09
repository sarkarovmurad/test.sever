import {
    TOGGLE_SHOW_INACTIVE,
    TOGGLE_SHOW_CHILDREN,
    REFRESH_PROCESS_LIST,
    SET_BASIC_LIST,
} from '../types/contactsList';
import { IBasicItem } from '@typings/contactsList';

export function toggleShowInactive(value: boolean) {
    return {
        type: TOGGLE_SHOW_INACTIVE,
        payload: value,
    };
}

export function toggleShowChildren(itemId: number, value: boolean) {
    return {
        type: TOGGLE_SHOW_CHILDREN,
        payload: {
            itemId,
            value,
        },
    };
}

export function refreshProcessList() {
    return {
        type: REFRESH_PROCESS_LIST,
    };
}

export function setBasicList(value: IBasicItem[]) {
    return {
        type: SET_BASIC_LIST,
        payload: value,
    };
}
