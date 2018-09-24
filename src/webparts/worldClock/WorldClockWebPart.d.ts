import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IWorldClockWebPartProps {
    description: string;
    timeZoneOffset: number;
}
export default class WorldClockWebPart extends BaseClientSideWebPart<IWorldClockWebPartProps> {
    private getTimeZones();
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
