import '../../styles/artifact-card/artifact-card.scss';
import '../../styles/artifact-card/__image-container/artifact-card__image-container.scss';
import '../../styles/artifact-card/__image-container/__image/artifact-card__image-container__image.scss';
import '../../styles/artifact-card/__description/artifact-card__description.scss';
import '../../styles/artifact-card/__rate/artifact-card__rate.scss';

import {MoreDetailedBtn} from "./MoreDetailedBtn.tsx";
import type {ArtifactCardData} from "../../props-interfaces/ArtifactCardData.ts";

export const ArtifactCard = (props: ArtifactCardData) => {
    return (
        <figure className='artifact-card'>
            <div className='artifact-card__image-container'>
                <div className='artifact-card__rate'>{props.rate}</div>
                <img src={`./for-artifact-card/${props.imageName}.webp`}
                     alt={props.imageName}
                     className='artifact-card__image-container__image'/>
            </div>
            <figcaption className='artifact-card__description'>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </figcaption>
            <MoreDetailedBtn/>
        </figure>
    );
}