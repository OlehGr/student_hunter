import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {DispatchType, RootStateType} from "./StoreTypes";

export const useStateSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

