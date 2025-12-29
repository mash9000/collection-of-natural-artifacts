export interface IArtifactCardData {
    getImageName(): () => string;

    getHeading(): string;

    getRate(): string;

    getDescription(): string;

    getUrl(): URL;
}