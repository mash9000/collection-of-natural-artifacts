import '../styles/mapOfNewArtifacts/mapOfNewArtifacts.scss';
import {ReadMore} from "./ReadMore.tsx";

export const MapOfNewArtifacts = () => {
    return (
        <div className="map-of-new-artifacts">
            <h2 className='map-of-new-artifacts__heading'>Новые артефакты</h2>
            <div className='map-of-new-artifacts__map-with-artifacts'>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
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