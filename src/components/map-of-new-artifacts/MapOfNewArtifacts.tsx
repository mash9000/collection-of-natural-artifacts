import '../../styles/artifact-card/__rate/artifact-card__rate.scss';
import '../../styles/map-of-new-artifacts/map-of-new-artifacts.scss';
import '../../styles/map-of-new-artifacts/__heading/map-of-new-artifacts__heading.scss';
import '../../styles/map-of-new-artifacts/__description-block/map-of-new-artifacts__description-block.scss';
import '../../styles/map-of-new-artifacts/__description-block/__heading/map-of-new-artifacts__description-block__heading.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/map-of-new-artifacts__map-with-artifacts.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__img/map-of-new-artifacts__map-with-artifacts__img--example-5.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__img/map-of-new-artifacts__map-with-artifacts__img--example-8.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__img/map-of-new-artifacts__map-with-artifacts__img--example-9.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__img/map-of-new-artifacts__map-with-artifacts__img--example-10.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__img/map-of-new-artifacts__map-with-artifacts__img--example-11.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__rate/map-of-new-artifacts__map-with-artifacts__rate--rate-1.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__rate/map-of-new-artifacts__map-with-artifacts__rate--rate-2.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__rate/map-of-new-artifacts__map-with-artifacts__rate--rate-3.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__rate/map-of-new-artifacts__map-with-artifacts__rate--rate-4.scss';
import '../../styles/map-of-new-artifacts/__map-with-artifacts/__rate/map-of-new-artifacts__map-with-artifacts__rate--rate-5.scss';

import {ReadMore} from "./ReadMore.tsx";

export const MapOfNewArtifacts = () => {
    return (
        <div className="map-of-new-artifacts">
            <h2 className='map-of-new-artifacts__heading'>Новые артефакты</h2>
            <div className='map-of-new-artifacts__map-with-artifacts'>
                <img className='map-of-new-artifacts__map-with-artifacts__img--example-5' src='./for-artifact-card/example-5.webp' alt='example-5'/>
                <img className='map-of-new-artifacts__map-with-artifacts__img--example-8' src='./for-artifact-card/example-8.webp' alt='example-8'/>
                <img className='map-of-new-artifacts__map-with-artifacts__img--example-9' src='./for-artifact-card/example-9.webp' alt='example-9'/>
                <img className='map-of-new-artifacts__map-with-artifacts__img--example-10' src='./for-artifact-card/example-10.webp' alt='example-10'/>
                <img className='map-of-new-artifacts__map-with-artifacts__img--example-11' src='./for-artifact-card/example-11.webp' alt='example-11'/>
                <p className='artifact-card__rate map-of-new-artifacts__map-with-artifacts__rate--rate-1'>5.3</p>
                <p className='artifact-card__rate map-of-new-artifacts__map-with-artifacts__rate--rate-2'>3.6</p>
                <p className='artifact-card__rate map-of-new-artifacts__map-with-artifacts__rate--rate-3'>1.2</p>
                <p className='artifact-card__rate map-of-new-artifacts__map-with-artifacts__rate--rate-4'>9.3</p>
                <p className='artifact-card__rate map-of-new-artifacts__map-with-artifacts__rate--rate-5'>5.2</p>
            </div>
            <div className='map-of-new-artifacts__description-block'>
                <h5 className='map-of-new-artifacts__description-block__heading'>Kurische
                    Nehrung 24</h5>
                <p className='map-of-new-artifacts__description-block__paragraph'>Вот
                    вам яркий пример современных тенденций - начало повседневной
                    работы по формированию позиции выявляет срочную потребность
                    методов управления процессами.
                    Есть над чем задуматься: представители современных
                    социальных резервов своевременно верифицированы.</p>
                <ReadMore/>
            </div>
        </div>
    )
}