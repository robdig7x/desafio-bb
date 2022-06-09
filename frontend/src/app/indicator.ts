import { InfoMap } from "./infoMap";

export class Indicator {
    indicator: InfoMap = new InfoMap();
    country: InfoMap = new InfoMap();
    countryiso3code: string;
    date: string;
    value: number;
    unit: string;
    obs_status: string;
    decimal: number;
}