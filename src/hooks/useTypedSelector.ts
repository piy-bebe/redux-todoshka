import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/index.ts';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
