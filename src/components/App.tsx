import {Header} from "./header/Header.tsx";
import {
    navbarMenuItems
} from "../model/model-implementation-v1/data/NavbarMenuItems.ts";
import {Wrapper} from "./wrapper/Wrapper.tsx";
import {
    dataWrapper
} from "../model/model-implementation-v1/data/DataWrapper.ts";
import {Carousel} from "./carousel/Carousel.tsx";
import {
    artifactCards
} from "../model/model-implementation-v1/data/ArtifactCardsData.ts";

export const App = () => {
    return (
        <>
            <Header menuItem={navbarMenuItems.getItems()}/>
            <Wrapper dataWrapper={dataWrapper}/>
            <Carousel listOfArtifactCards={artifactCards.getItems()}/>
        </>
    )
}