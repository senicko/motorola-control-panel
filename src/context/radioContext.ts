import { Dispatch, SetStateAction, createContext } from 'react';
import { IRadio } from '../types/radioTypes';

interface IRadioContext {
  radios: IRadio[];
  selectedRadio: IRadio | null;
  setSelectedRadio?: Dispatch<SetStateAction<IRadio | null>>;
}

export const RadioContext = createContext<IRadioContext>({
  radios: [],
  selectedRadio: null,
});
