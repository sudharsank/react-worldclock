import * as React from 'react';
import { IWorldClockProps } from './IWorldClockProps';
export default class WorldClock extends React.Component<IWorldClockProps, {}> {
    render(): React.ReactElement<IWorldClockProps>;
    /**
     * this method determines the minutes offset of the selected time zone
     */
    private convertTimeZoneIdToOffset(id);
}
