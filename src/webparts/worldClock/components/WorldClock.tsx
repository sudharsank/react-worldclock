import * as React from 'react';
import styles from './WorldClock.module.scss';
import { IWorldClockProps } from './IWorldClockProps';
import { Clock } from './Clock';
import * as timeZones from './Timezones';
import * as strings from 'WorldClockWebPartStrings';

export default class WorldClock extends React.Component<IWorldClockProps, {}> {

  public render(): React.ReactElement<IWorldClockProps> {
    return (
      <div className={styles.worldClock}>
        <div className={styles.container}>
          <div className={styles.description}>{(this.props.description) ? this.props.description : strings.LocalTimeDescription}</div>
          <Clock timeZoneOffset={this.convertTimeZoneIdToOffset(this.props.timeZoneOffset)} />
        </div>
      </div>
    );
  }

  /**
   * this method determines the minutes offset of the selected time zone
   */
  private convertTimeZoneIdToOffset(id: number): number {

    let result: number = 0;

    const matchingItems: timeZones.ITimeZone[] = timeZones.TimeZones.zones.filter((e: timeZones.ITimeZone, i: number) => {
      return (e.id === id);
    });

    if (matchingItems && matchingItems.length > 0) {
      result = matchingItems[0].offsetMinutes;
    }

    return (result);
  }
}
