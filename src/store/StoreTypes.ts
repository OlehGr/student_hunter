import store from "./store";


export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export interface IAction  {
    type: string
}

export interface IFile {
    name: string
    lastModified: number
    lastModifiedDate: Date

}