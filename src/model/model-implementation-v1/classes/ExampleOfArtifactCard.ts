import type {
    IArtifactCardData
} from "../../interfaces/ArtifactCard/IArtifactCardData.ts";
import {AppConfig} from "../../AppConfig.ts";
import {
    ErrorCreatingArtifactCard
} from "../../errors/ErrorCreatingArtifactCard.ts";

export class ExampleOfArtifactCard implements IArtifactCardData {
    private readonly title: string;

    constructor(title: string, private readonly description: string, private readonly url: URL) {
        this.checkTitle(title);
        this.title = title;
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

    getDescription(): string {
        return this.description;
    }

    getTitle(): string {
        return this.title.substring(0, AppConfig.getTheMaximumLengthOfTheTitleOfArtifactCard());
    }

    getUrl(): URL {
        return this.url;
    }
}