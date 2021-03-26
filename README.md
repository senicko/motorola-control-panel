dd- [**Dokumentacja**](#dokumentacja)

- [Dokumentacja](#dokumentacja)
  - [Wstęp](#wstęp)
    - [_Co to i dla kogo?_](#co-to-i-dla-kogo)
  - [Opis funkcjonalności](#opis-funkcjonalności)
    - [_Mapa urządzeń w sieci_](#mapa-urządzeń-w-sieci)
    - [_Tabela_](#tabela)
  - [Część techniczna](#część-techniczna)
    - [_Używane technologie_](#używane-technologie)
    - [_Opis poszczególnych komponentów_](#opis-poszczególnych-komponentów)
    - [Map](#map)

<br/>

# Dokumentacja

## Wstęp

<br/>

### _Co to i dla kogo?_

Konsola operatorska to aplikacja webowa pozwalająca na monitorowanie stanu urządzeń w sieci. Jest ona kierowana do Operatorów sieci łączności.

<br/>

---

<br/>

## Opis funkcjonalności

<br/>

### _Mapa urządzeń w sieci_

Aplikacja posiada mapę oraz tabelę, które umożliwają wygodne śledzenie oraz monitorowanie urządzeń znajdujących się w sieci. Mapa informuje o pozycji, ogólnym stanie technicznym urządzenia oraz ich typie. Kliknięcie w ikonę skutkuje zaznaczeniem urządzenia oraz wyświetleniem jego odległości do reszty.

<br/>

### _Tabela_

Tabela urządzeń dostarcza szczegółowych informacji na ich temat. Znadują się w niej

- Id
- Nazwa
- Numer Seryjny
- Typ
- Siła zasięgu
- Poziom baterii
- tryb pracy

konkretnych urządzeń. Dane można sortować `malejąco` i `rosnąco`. Tabela umożliwia zaznaczanie urządzeń, co skutkuje zaznaczeniem go na mapie.

<br/>

---

<br/>

## Część techniczna

<br/>

### _Używane technologie_

- [`React`](https://reactjs.org/) - Framework (biblioteka) frontend
- [`typescript`](https://www.typescriptlang.org/) - Superset języka jacascript
- [`material-ui`](https://material-ui.com/) - Biblioteka UI do frameworka [`React`](https://reactjs.org/) (W tym przypadku tylko i wyłącznie ikony)
- [`leaflet.js`](https://leafletjs.com/)
- [`react-leaflet.js](https://react-leaflet.js.org/)

<br/>

### _Opis poszczególnych komponentów_

<br/>

### Map

```ts
const Map = () => {
  return (
    <MapContainer center={[50.0647, 19.945]} zoom={12} className="map">
      <TileLayer attribution={attribution} url={url} />
      <RadioMarkerLayer />
      <RadioDistanceLayer />
    </MapContainer>
  );
};
```

`Map` to wrapper dla mapy stworzonej poprzez [`leaflet.js`](https://leafletjs.com/). Zdjęcia dla mapy pochodzą od serwisu [`mapbox`](https://www.mapbox.com/), który jest darmowy tylko do pewnego momentu, lecz oferuje ładniejsze kafle mapy.
Centrum mapy ustawione jest na koordynaty `50.0647, 19.945` (Centrum Krakowa). Jako dzieci komponentu przekazane są

- `RadioMarkerLayer` (Warstwa z ikonami urządzeń)
- `RadioDistanceLayer` (Warstwa wyświetlająca linie odległości w momencie gdy jakieś urządzenie jest wybrane)

_Opis każdego z tych komponentów znajdzie się w dalszej części dokumentacji_
