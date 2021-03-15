import {
  Dispatch,
  SetStateAction,
  createContext,
  FunctionComponent,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { IRadio } from '../types/radioTypes';

interface IRadioContext {
  radios: IRadio[];
  selectedRadio?: IRadio;
  setSelectedRadioId?: Dispatch<SetStateAction<number | undefined>>;
}

export const RadioContext = createContext<IRadioContext>({
  radios: [],
});

export const RadioContextProvider: FunctionComponent = ({ children }) => {
  const [radios, setRadios] = useState<IRadio[]>([]);
  const [selectedRadioId, setSelectedRadioId] = useState<number>();

  const selectedRadio = useMemo(
    () => radios.find((radio) => radio.Id === selectedRadioId),
    [selectedRadioId, radios]
  );

  const radioContextProviderValue = useMemo(
    () => ({ radios, selectedRadio, setSelectedRadioId }),
    [radios, selectedRadio]
  );

  const fetchRadios = () => {
    fetch('/radios')
      .then((res) => res.json())
      .then((data) => setRadios(data));

    setTimeout(fetchRadios, 5000);
  };

  useEffect(() => fetchRadios(), []);

  return (
    <RadioContext.Provider value={radioContextProviderValue}>
      {children}
    </RadioContext.Provider>
  );
};
