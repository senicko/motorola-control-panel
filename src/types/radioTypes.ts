export type TRadioType = "Portable" | "Car" | "BaseStation";
export type TRadioWorkingMode = "Voice" | "Data" | "Idle";

export interface IRadioPosition {
  Lat: string;
  Lon: string;
}

export interface IRadio {
  Id: string;
  Name: string;
  Type: TRadioType;
  SerialNumber: string;
  Strength: number;
  BatteryLevel: number;
  WorkingMode: TRadioWorkingMode;
  Position: IRadioPosition;
}
