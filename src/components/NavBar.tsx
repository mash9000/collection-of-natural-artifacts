import '../styles/header/navbar/navbar.scss';
import '../styles/header/navbar/navbar__link.scss';
import '../styles/header/navbar/navbar__link--hover.scss';
import '../styles/header/navbar/navbar__link--focus.scss';
import '../styles/header/navbar/navbar__link--active.scss';

type NavBarProps = {
    menuItem: { title: string, link: URL }[];
}

export const NavBar = (props: NavBarProps) => {
    return (
        <nav className='navbar'>
            {props.menuItem.map((menuItem: { title: string, link: URL }) =>
                <a className='navbar__link navbar__link--hover navbar__link--focus navbar__link--active'
                   target='_blank'
                   href={menuItem.link.href}
                   key={menuItem.title}>{menuItem.title}</a>)}
        </nav>
    )
}