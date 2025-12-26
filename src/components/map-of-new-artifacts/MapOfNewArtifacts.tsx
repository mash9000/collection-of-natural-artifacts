import '../styles/mapOfNewArtifacts/mapOfNewArtifacts.scss';
import {ReadMore} from "./ReadMore.tsx";

export const MapOfNewArtifacts = () => {
    return (
        <div className="map-of-new-artifacts">
            <h2 className='map-of-new-artifacts__heading'>Новые артефакты</h2>
            <div className='map-of-new-artifacts__map-with-artifacts'>
                <img src='./for-artifact-card/example-5.webp' alt='example-5'/>
                <img src='./for-artifact-card/example-6.webp' alt='example-6'/>
                <img src='./for-artifact-card/example-7.webp' alt='example-7'/>
                <img src='./for-artifact-card/example-8.webp' alt='example-8'/>
                <img src='./for-artifact-card/example-9.webp' alt='example-9'/>
                <img src='./for-artifact-card/example-10.webp' alt='example-10'/>
                <img src='./for-artifact-card/example-11.webp' alt='example-11'/>
                <p className=''>5.3</p>
                <p className=''>1.6</p>
                <p className=''>6.3</p>
                <p className=''>6.2</p>
                <p className=''>9.1</p>
                <p className=''>1.1</p>
                <p className=''>2.6</p>
            </div>
            <div className='map-of-new-artifacts__description-block'>
                <h5 className='map-of-new-artifacts__description-block__heading'></h5>
                <p className='map-of-new-artifacts__description-block__paragraph'></p>
                <ReadMore/>
            </div>
        </div>
    )
}