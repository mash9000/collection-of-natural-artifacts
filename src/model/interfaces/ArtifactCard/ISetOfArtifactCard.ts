import type {IArtifactCardData} from "./IArtifactCardData.ts";

export interface ISetOfArtifactCard {
    getItems(): IArtifactCardData[];
}