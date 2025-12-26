import '../../styles/more-detailed-btn/more-detailed-btn.scss';
import '../../styles/more-detailed-btn/more-detailed-btn--hover.scss';
import '../../styles/more-detailed-btn/more-detailed-btn--focus.scss';
import '../../styles/more-detailed-btn/more-detailed-btn--active.scss';
import '../../styles/more-detailed-btn/more-detailed-btn--disabled.scss';

export const MoreDetailedBtn = () => {
    return (
        <button type='button'
                className='more-detailed-btn more-detailed-btn--hover more-detailed-btn--focus more-detailed-btn--active more-detailed-btn--disabled'>Подробнее</button>
    );
}