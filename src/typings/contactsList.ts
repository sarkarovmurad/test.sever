export interface IInitItem {
    id: number;
    parentId: number;
    isActive: boolean;
    name: string;
    email?: string;
    balance?: string;
}

export interface IBasicItem extends IInitItem {
    showChildren?: boolean;
}

export interface IItem extends IBasicItem {
    children?: IItem[];
}

export interface IContactsListState {
    basicList: IBasicItem[];
    processList: IItem[];
    showInactive: boolean;
}
