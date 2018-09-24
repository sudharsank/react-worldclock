export interface ITimeZone {
    id: number;
    displayName: string;
    name: string;
    offsetMinutes: number;
}
export declare class TimeZones {
    static zones: ITimeZone[];
}
