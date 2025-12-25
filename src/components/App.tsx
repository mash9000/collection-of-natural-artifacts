import {Header} from "./header/Header.tsx";
import {Wrapper} from "./wrapper/Wrapper.tsx";
import {ArtifactCard} from "./ArtifactCard.tsx";
import type {WrapperData} from "../props-interfaces/WrapperData.ts";
import type {ArtifactCardData} from "../props-interfaces/ArtifactCardData.ts";

export const App = () => {
    const navBarMenuItems: { title: string, link: URL }[] = [
        {title: 'Каталог', link: new URL('https://ya.ru/')},
        {title: 'Галерея', link: new URL('https://ya.ru/')},
        {title: 'О лаборатории', link: new URL('https://ya.ru/')},
        {title: 'Контакты', link: new URL('https://ya.ru/')},
    ]

    const wrapperData: WrapperData = {
        heading: 'Крупнейшая коллекция природных артефактов',
        description: 'Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.',
        link: new URL('https://ya.ru/')
    }

    const artifactCard: ArtifactCardData =
        {
            imageName: 'example-1',
            rate: 2.4,
            heading: 'Fig. 1 (plant)',
            description: 'Имеется спорная точка зрения, гласящая примерно следующее:\n' +
                '                    активно развивающиеся страны третьего мира своевременно\n' +
                '                    верифицированы.'
        }

    return (
        <>
            <Header menuItem={navBarMenuItems}/>
            <Wrapper {...wrapperData}/>
            <ArtifactCard {...artifactCard} />
        </>
    )
}