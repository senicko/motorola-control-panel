- [Dokumentacja](#dokumentacja)
  - [Wstęp](#wstęp)
    - [_Co to_](#co-to)
  - [Opis funkcjonalności](#opis-funkcjonalności)
    - [_Mapa urządzeń w sieci_](#mapa-urządzeń-w-sieci)
    - [_Tabela_](#tabela)
  - [Część techniczna](#część-techniczna)
    - [_Używane technologie_](#używane-technologie)
    - [Przechowywanie danych](#przechowywanie-danych)
  - [_Opis poszczególnych komponentów_](#opis-poszczególnych-komponentów)
    - [Komponent Map (`src/components/Map.tsx`)](#komponent-map-srccomponentsmaptsx)
    - [Komponent MapMarker (`src/components/MapMarker.tsx`)](#komponent-mapmarker-srccomponentsmapmarkertsx)
    - [Komponent RadioMarkerLayer (`src/components/RadioMarkerLayer.tsx`)](#komponent-radiomarkerlayer-srccomponentsradiomarkerlayertsx)
    - [Komponent RadioDistanceLayer (`src/components/RadioDistanceLayer.tsx`)](#komponent-radiodistancelayer-srccomponentsradiodistancelayertsx)
    - [Komponent RadioTable (`src/components/RadioTable.tsx`)](#komponent-radiotable-srccomponentsradiotabletsx)
    - [Komponent Table (`src/components/Table.tsx`)](#komponent-table-srccomponentstabletsx)
  - [Funkcje pomocnicze](#funkcje-pomocnicze)
    - [getColorFromPercentage (src/util/icons.tsx)](#getcolorfrompercentage-srcutiliconstsx)
    - [typeIconFactory (src/util/icons.tsx)](#typeiconfactory-srcutiliconstsx)
    - [workingModeIconFactory (src/util/icons.tsx)](#workingmodeiconfactory-srcutiliconstsx)
    - [strengthIconFactory (src/util/icons.tsx)](#strengthiconfactory-srcutiliconstsx)
    - [batteryIconFactory (src/util/icons.tsx)](#batteryiconfactory-srcutiliconstsx)
    - [getKeyValue (src/util/objects.ts)](#getkeyvalue-srcutilobjectsts)
    - [parseRadioPosition (src/util/parseRadioPosition.ts)](#parseradioposition-srcutilparseradiopositionts)
    - [renderMarker (src/util/renderMarker.ts)](#rendermarker-srcutilrendermarkerts)

<br/>

# Dokumentacja

## Wstęp

<br/>

### _Co to_

Konsola operatorska to aplikacja webowa pozwalająca na monitorowanie stanu urządzeń w sieci.

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
- [`leaflet.js`](https://leafletjs.com/) - Biblioteka pozwalająca na proste zarządzanie mapami w js
- [`react-leaflet.js`](https://react-leaflet.js.org/) - Biblioteka pozwalająca na prostą implementację biblioteki [`leaflet.js`](https://leafletjs.com/) w React.

<br/>

### Przechowywanie danych

Dane (Informacje o urządzeniach z sieci) przechowywane są za pomocą funkcjonalności `context` dostępnej w bibliotece `React`. Pozwala ona na globalny dostęp do danych z każdego komponentu umieszczonego w `RadioContextProvider` (Komponent dający dostęp do danych komponentom wewnątrz). W tym przypadku dostęp do danych ma cała aplikacja poprzez otoczenie providerem głównego komponentu `App` w pliku `index.tsx`. Inicjalizacja context'u znajduje się w pliku `src/context/radioContext.tsx`

## _Opis poszczególnych komponentów_

<br/>

### Komponent Map (`src/components/Map.tsx`)

`Map` to wrapper dla mapy stworzonej poprzez [`leaflet.js`](https://leafletjs.com/). Zdjęcia dla mapy pochodzą z openstreet map. Centrum mapy ustawione jest na koordynaty `50.0647, 19.945` (Centrum Krakowa). Jako dzieci komponentu przekazane są

- `TileLayer` (Component biblioteki react-leaflet, który odpowiada za wyświetlanie mapy)
- `RadioMarkerLayer` (Warstwa z ikonami urządzeń)
- `RadioDistanceLayer` (Warstwa wyświetlająca linie odległości w momencie gdy jakieś urządzenie jest wybrane)

<br/>
<br/>

### Komponent MapMarker (`src/components/MapMarker.tsx`)

`MapMarker` to komponent definiujący pojedyńczy znacznik na mapie. Poza wyrenderowaniem ikonki urządzenia (Jego typu), komponent oblicz również jego zdrowie, przy którego pomocy otrzymywany jest kolor odpowiadający zdrowiu urządzenia w sieci.

Wzór na zdrowie:

```
(battery + signalStrength * 10) / 2
```

Wzór ten na równo traktuje poziom baterii i siłę zasięgu.

<br/>
<br/>

### Komponent RadioMarkerLayer (`src/components/RadioMarkerLayer.tsx`)

`RadioMarkerLayer` nakłada ikony urządzeń w sieci na mapę stworzoną przez bibliotekę `react-leaflet`. W aplikacji jest przekazywany jako dziecko komponentu `Map`. Dane o urządzeniach pobiera z `context'u`.

Komponent iteruje przez listę urzadzeń i dla każdego tworzy komponent `Marker` dostarczony przez bibliotekę `react-leaflet`.

<br/>
<br/>

### Komponent RadioDistanceLayer (`src/components/RadioDistanceLayer.tsx`)

`RadioDistanceLayer` Wyświetla linie łączące ikony urządzeń na mapie z zaznaczonym urządzeniem. W aplikacji przekazywany jest jako dziecko komponentu `Map`. Dane o urządzeniach pobierane są z `context'u`.

Komponent iteruje przez listę urzadzeń i dla każdego tworzy komponent `Polyline` dostarczony przez bibliotekę `react-leaflet`.

<br/>
<br/>

### Komponent RadioTable (`src/components/RadioTable.tsx`)

`RadioTable` to komponent konfiguracyjny dla komponentu `Table`. Komponent pobiera dane o urządzeniach z `contextu`. Następnie renderuje informację o połączeniu z serwerem, oraz komponent `Table`, do którego przekazuje dane o urządzeniach i wcześniej zadeklarowane nagłówki.

<br/>
<br/>

### Komponent Table (`src/components/Table.tsx`)

`Table` to komponent do wyświetlania danych w formacie json w postaci tabeli. Komponent jako prop'y przyjmuje nagłówki (`headers`), dane (`rows`), funkcję aktywowaną na kliknięcie rzędu (`onRowClick`), klucz po którym dane mają być porównywane do zaznaczonego rzędu (`compareWith`), i aktualnie zaznaczone urządzenie (`selected`).

Komponent do sortowania danych użwa customowego hooka `useTable`. Następnie posortowane dane wyswietla w tabeli.

<br/>

## Funkcje pomocnicze

<br/>

### getColorFromPercentage (src/util/icons.tsx)

Funkcja zwraca kolor odpowiadający podanemu procentowi (0% - czerwony, 100% - zielony)

<br/>

### typeIconFactory (src/util/icons.tsx)

Funkcja zwracająca ikonę w zależności od typu urządzenia.

<br/>

### workingModeIconFactory (src/util/icons.tsx)

Funkcja zwracająca ikonę w zależności od trybu pracy urządzenia.

<br/>

### strengthIconFactory (src/util/icons.tsx)

Funkcja zwraca ikonę w kolorze odpowiadającym stanie siły zasięgu podanego urządzenia (0 - czerwony, 10 - zielony).

<br/>

### batteryIconFactory (src/util/icons.tsx)

Funkcja zwraca ikonę w kolorze odpowiadającym stanie baterii podanego urządzenia (0 - czerwony, 100 - zielony).

<br/>

### getKeyValue (src/util/objects.ts)

Funkcja zwraca wartość podanego pola w podanym obiekcie. Jeżeli pole nie istnieje funkcja zwraca pusty string.

<br/>

### parseRadioPosition (src/util/parseRadioPosition.ts)

Funkcja tworzy obiekt pozycji, zdefiniowany w bibliotece [`leaflet.js`](https://leafletjs.com/), danego urządzenia.

<br/>

### renderMarker (src/util/renderMarker.ts)

Funkcja jako parametr pobiera komponent i zwraca ikonę (typu `DivIcon`) z biblioteki [`leaflet.js`](https://leafletjs.com/)
