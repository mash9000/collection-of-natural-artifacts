import '../../styles/artifact-card/artifact-card.scss';
import '../../styles/artifact-card/__image-container/artifact-card__image-container.scss';
import '../../styles/artifact-card/__image-container/__image/artifact-card__image-container__image.scss';
import '../../styles/artifact-card/__description/artifact-card__description.scss';
import '../../styles/artifact-card/__rate/artifact-card__rate.scss';

import {MoreDetailedBtn} from "../MoreDetailedBtn.tsx";
import type {
    IArtifactCardData
} from "../../model/interfaces/ArtifactCard/IArtifactCardData.ts";

export const ArtifactCard = (props: IArtifactCardData) => {
    return (
        <figure className='artifact-card'>
            <div className='artifact-card__image-container'>
                <div className='artifact-card__rate'>{props.getRate()}</div>
                <img src={`./for-artifact-card/${props.getImageName()}.webp`}
                     alt={String(() => props.getImageName())}
                     className='artifact-card__image-container__image'/>
            </div>
            <figcaption className='artifact-card__description'>
                <h3>{props.getHeading()}</h3>
                <p>{props.getDescription()}</p>
            </figcaption>
            <MoreDetailedBtn/>
        </figure>
    );
}