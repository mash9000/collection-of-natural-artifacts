import type {
    IArtifactCardData
} from "../../interfaces/ArtifactCard/IArtifactCardData.ts";
import {AppConfig} from "../../AppConfig.ts";
import {
    ErrorCreatingArtifactCard
} from "../../errors/ErrorCreatingArtifactCard.ts";

export class ExampleOfArtifactCard implements IArtifactCardData {
    private readonly title: string;
    private readonly description: string;

    private readonly rate: number;

    constructor(title: string,
                description: string,
                private readonly url: URL,
                rate: number) {
        this.checkTitle(title);
        this.checkRate(rate);
        this.checkDescription(description);

        this.title = title;
        this.description = description;

        this.rate = rate;
    }

    private checkTitle(title: string): void {
        this.checkEmptyOfTitle(title);
        this.checkSpaceOfTitle(title);
    }

    private checkEmptyOfTitle(title: string): void {
        if (title === '')
            throw new ErrorCreatingArtifactCard('заголовок не должен быть пустым');
    }

    private checkSpaceOfTitle(title: string): void {
        const pattern: RegExp = /^\s+$/g;
        if (pattern.test(title))
            throw new ErrorCreatingArtifactCard('заголовок не должен состоять из пробелов');
    }

    private checkRate(rate: number): void {
        this.checkMinimumRate(rate);
        this.checkMaximumRate(rate);
    }

    private checkMinimumRate(rate: number): void {
        if (rate < AppConfig.getTheMinimumRate())
            throw new ErrorCreatingArtifactCard(`рейтинг должен быть равным или больше ${AppConfig.getTheMinimumRate()}`);
    }

    private checkMaximumRate(rate: number): void {
        if (rate > AppConfig.getTheMaximumRate())
            throw new ErrorCreatingArtifactCard(`рейтинг должен быть равным или меньше ${AppConfig.getTheMaximumRate()}`);
    }

    private checkDescription(description: string): void {
        this.checkEmptyOfDescription(description);
        this.checkSpaceOfDescription(description);
        this.checkShortDescription(description);
    }

    private checkEmptyOfDescription(description: string): void {
        if (description === '')
            throw new ErrorCreatingArtifactCard('описание не должно быть пустым');
    }

    private checkSpaceOfDescription(description: string): void {
        const pattern: RegExp = /^\s+$/g;
        if (pattern.test(description))
            throw new ErrorCreatingArtifactCard('описание не должно состоять из пробелов');
    }

    private checkShortDescription(description: string): void {
        if (description.length < AppConfig.getTheMinimumLengthOfDescriptionString())
            throw new ErrorCreatingArtifactCard(`длина описания должна быть не менее ${AppConfig.getTheMinimumLengthOfDescriptionString()}`);
    }

    getDescription(): string {
        return this.description;
    }

    getHeading(): string {
        return this.title.substring(0, AppConfig.getTheMaximumLengthOfTheTitleOfArtifactCard());
    }

    getUrl(): URL {
        return this.url;
    }

    getRate(): string {
        return this.rate.toFixed(1);
    }
}