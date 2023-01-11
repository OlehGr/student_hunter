import {IAction} from "../StoreTypes";

export type IState = {
    title: string | undefined
    description: string | undefined
    img: FileList | undefined,
    isChanging: boolean,
    infos: {
        count: number
        isEdit: Array<number>,
        items: Array<TInfo>
    }
}

export type TInfo = {
    id: number
    title: string
    description: string
}

export interface ICreatAdvertRedAction extends IAction {
    id?: number
    title?: string | undefined
    description?: string | undefined
    img?: FileList | undefined
    bool?: boolean
}

export type UserInputType <T> = T | undefined