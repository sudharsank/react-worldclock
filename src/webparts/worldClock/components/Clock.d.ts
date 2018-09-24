import * as React from 'react';
export interface IClockProps {
    timeZoneOffset?: number;
}
export interface IClockState {
    date: Date;
}
export declare class Clock extends React.Component<IClockProps, IClockState> {
    private _timerID;
    constructor(props: IClockProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<IClockProps>;
    /**
     * this method converts the current date and time into the right time zone,
     * based on the offset configured in the properties
     */
    private getDateTimeWithOffset();
    private tick();
}
