import '../../styles/header/search-and-login-panel/search-and-login-panel.scss';
import '../../styles/header/search-and-login-panel/login-element/login-element.scss';
import '../../styles/header/search-and-login-panel/login-element/login-element--hover.scss';
import '../../styles/header/search-and-login-panel/login-element/login-element--active.scss';
import '../../styles/header/search-and-login-panel/login-element/login-element--focus.scss';
import '../../styles/header/search-and-login-panel/search-element/search-element.scss';

export const SearchAndLoginPanel = () => {
    return (
        <div className="search-and-login-panel">
            <div className='search-element'></div>
            <div className='login-element login-element--hover login-element--active login-element--focus'></div>
        </div>
    );
}