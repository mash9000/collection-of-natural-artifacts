import {Header} from "./header/Header.tsx";
import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Carousel} from "./carousel/Carousel.tsx";
import {navBarMenuItems} from "../data/NavBarData.ts";
import {wrapperData} from "../data/WrapperData.ts";
import {artifactCards} from "../data/ArtifactCardsData.ts";

export const App = () => {

    return (
        <>
            <Header menuItem={navBarMenuItems}/>
            <Wrapper {...wrapperData}/>
            <Carousel listOfArtifactCards={artifactCards}/>
        </>
    )
}