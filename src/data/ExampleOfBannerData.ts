import type {IBannerData} from "../model/IBannerData.ts";
import {AppConfig} from "../model/AppConfig.ts";
import {ErrorCreatingBanner} from "../model/ErrorCreatingBanner.ts";

export class ExampleOfBannerData implements IBannerData {
    constructor(private readonly title: string,
                private readonly description: string) {
    }

    getDescription(): string {
        this.verifyTheDescription();
        return this.description;
    }

    private verifyTheDescription() {
        if (this.description.length < AppConfig.getTheMinimumLengthOfTheBannerDescriptionString())
            throw new ErrorCreatingBanner(`minimum length of the description string - ${AppConfig.getTheMinimumLengthOfTheBannerDescriptionString()}`);
    }

    getTitle(): string {
        this.verifyTheHeader();
        return this.title;
    }

    private verifyTheHeader() {
        if (this.title.length < AppConfig.getTheMinimumLengthOfTheBannerHeaderString())
            throw new ErrorCreatingBanner(`minimum length of the header string - ${AppConfig.getTheMinimumLengthOfTheBannerHeaderString()}`);
    }
}