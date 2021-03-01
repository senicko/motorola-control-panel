import { useEffect, useState } from 'react';
import { RadioContext } from './context/radioContext';
import { IRadio } from './types/radioTypes';
import Map from './components/Map';

function App() {
  const [radios, setRadios] = useState<IRadio[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<IRadio | null>(null);
  const [error, setError] = useState(false);

  const fetchRadios = () => {
    fetch('/radios')
      .then((res) => res.json())
      .then((data) => setRadios(data))
      .catch((err) => setError(true));
  };

  useEffect(() => {
    fetchRadios();
    setInterval(fetchRadios, 5000);
  }, []);

  return (
    <RadioContext.Provider value={{ radios, selectedRadio, setSelectedRadio }}>
      <div className="App">
        <Map />
      </div>
    </RadioContext.Provider>
  );
}

export default App;
