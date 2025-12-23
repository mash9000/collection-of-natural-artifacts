import {NavBar} from "./NavBar.tsx";

export const App = () => {
    const navBarMenuItems: { title: string, link: URL }[] = [
        {title: 'Каталог', link: new URL('https://ya.ru/')},
        {title: 'Галерея', link: new URL('https://ya.ru/')},
        {title: 'О лаборатории', link: new URL('https://ya.ru/')},
        {title: 'Контакты', link: new URL('https://ya.ru/')},
    ]
    return (
        <NavBar menuItem={navBarMenuItems}/>
    )
}