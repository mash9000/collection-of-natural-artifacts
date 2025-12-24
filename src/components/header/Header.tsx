import {NavBar} from "./NavBar.tsx";
import {Logo} from "./Logo.tsx";
import {SearchAndLoginPanel} from "./SearchAndLoginPanel.tsx";
import '../../styles/header/header.scss';
import '../../styles/header/header--adaptive.scss';

type HeaderProps = {
    menuItem: { title: string, link: URL }[];
}

export const Header = (props: HeaderProps) => {
    return (
        <header className='header header--adaptive'>
            <div>
                <Logo/>
                <NavBar menuItem={props.menuItem}/>
                <SearchAndLoginPanel/>
            </div>
        </header>
    );
}