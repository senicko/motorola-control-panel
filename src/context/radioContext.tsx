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
  connError: boolean;
  selectedRadio?: IRadio;
  setSelectedRadioId: Dispatch<SetStateAction<number | undefined>>;
}

export const RadioContext = createContext<IRadioContext>({
  radios: [],
  connError: false,
  setSelectedRadioId: (() => {}) as Dispatch<
    SetStateAction<number | undefined>
  >,
});

export const RadioContextProvider: FunctionComponent = ({ children }) => {
  const [radios, setRadios] = useState<IRadio[]>([]);
  const [connError, setConnError] = useState(false);
  const [selectedRadioId, setSelectedRadioId] = useState<number>();

  const selectedRadio = useMemo(
    () => radios.find((radio) => radio.Id === selectedRadioId),
    [selectedRadioId, radios]
  );

  const radioContextProviderValue = useMemo(
    () => ({ radios, selectedRadio, connError, setSelectedRadioId }),
    [radios, selectedRadio, selectedRadioId, connError]
  );

  const fetchRadios = () => {
    fetch('/radios')
      .then((res) => res.json())
      .then((data) => {
        setRadios(data);
        setConnError(false);
      })
      .catch(() => {
        setConnError(true);
      });

    setTimeout(fetchRadios, 5000);
  };

  useEffect(() => fetchRadios(), []);

  return (
    <RadioContext.Provider value={radioContextProviderValue}>
      {children}
    </RadioContext.Provider>
  );
};
