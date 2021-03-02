import { RadioContextProvider } from './context/radioContext';
import Map from './components/Map';

function App() {
  return (
    <RadioContextProvider>
      <div className="App">
        <Map />
      </div>
    </RadioContextProvider>
  );
}

export default App;
