import type {
    ISetOfArtifactCard
} from "../../../interfaces/ArtifactCard/ISetOfArtifactCard.ts";
import type {
    IArtifactCardData
} from "../../../interfaces/ArtifactCard/IArtifactCardData.ts";

export class ExampleOfArtifactCardsData implements ISetOfArtifactCard {
    constructor(private readonly artifactCards: IArtifactCardData[]) {
    }

    getItems(): IArtifactCardData[] {
        return [...this.artifactCards];
    }
}