import {Header} from "./header/Header.tsx";
import {Wrapper} from "./wrapper/Wrapper.tsx";

export const App = () => {
    const navBarMenuItems: { title: string, link: URL }[] = [
        {title: 'Каталог', link: new URL('https://ya.ru/')},
        {title: 'Галерея', link: new URL('https://ya.ru/')},
        {title: 'О лаборатории', link: new URL('https://ya.ru/')},
        {title: 'Контакты', link: new URL('https://ya.ru/')},
    ]

    const wrapperText = {
        heading: 'Крупнейшая коллекция природных артефактов',
        description: 'Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.',
        link: new URL('https://ya.ru/')
    }

    return (
        <>
            <Header menuItem={navBarMenuItems}/>
            <Wrapper wrapperText={wrapperText}/>
        </>
    )
}