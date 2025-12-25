import '../../styles/carousel/carousel.scss';
import '../../styles/carousel/__control/carousel__control.scss';
import '../../styles/carousel/__control/__button/carousel__control__button.scss';
import '../../styles/carousel/__control/__button/carousel__control__button--focus.scss';
import '../../styles/carousel/__control/__button/__next/carousel__control__button__next.scss';
import '../../styles/carousel/__control/__button/__next/carousel__control__button__next--active.scss';
import '../../styles/carousel/__control/__button/__prev/carousel__control__button__prev.scss';
import '../../styles/carousel/__control/__button/__prev/carousel__control__button__prev--active.scss';
import '../../styles/carousel/__control/__info-count/carousel__control__info-count.scss';

import {ArtifactCard} from "./ArtifactCard.tsx";
import type {
    ArtifactCardData
} from "../../props-interfaces/ArtifactCardData.ts";
import {useState} from "react";

type CarouselProps = {
    listOfArtifactCards: ArtifactCardData[];
}

export const Carousel = ({listOfArtifactCards}: CarouselProps) => {
    const NUMBER_OF_CARDS_DISPLAYED: number = 4;
    const [viewingStartPosition, setViewingStartPosition] = useState<number>(0);
    const [paginationNumber, setPaginationNumber] = useState<number>(1);
    const totalNumberOfArtifactCards: number = Math.ceil(listOfArtifactCards.length / NUMBER_OF_CARDS_DISPLAYED);
    const next = (): void => {
        if ((viewingStartPosition + NUMBER_OF_CARDS_DISPLAYED) <= listOfArtifactCards.length - 1) {
            setViewingStartPosition(viewingStartPosition + NUMBER_OF_CARDS_DISPLAYED);
            setPaginationNumber(paginationNumber + 1);
        }
    }

    const prev = (): void => {
        if ((viewingStartPosition - NUMBER_OF_CARDS_DISPLAYED) >= 0) {
            setViewingStartPosition(viewingStartPosition - NUMBER_OF_CARDS_DISPLAYED);
            setPaginationNumber(paginationNumber - 1);
        }
    }

    return (
        <div className="carousel">
            <div>
                {listOfArtifactCards.slice(viewingStartPosition, viewingStartPosition + NUMBER_OF_CARDS_DISPLAYED)
                    .map((artifactCard: ArtifactCardData) =>
                    <ArtifactCard
                        key={artifactCard.heading}
                        {...artifactCard}/>)}
            </div>
            <div className="carousel__control">
                <button type='button'
                        className='carousel__control__button carousel__control__button--focus carousel__control__button__prev carousel__control__button__prev--active'
                        onClick={prev}></button>
                <span
                    className='carousel__control__info-count'>{paginationNumber} из {totalNumberOfArtifactCards}</span>
                <button type='button'
                        className='carousel__control__button carousel__control__button--focus carousel__control__button__next carousel__control__button__next--active'
                        onClick={next}></button>
            </div>
        </div>
    );
}