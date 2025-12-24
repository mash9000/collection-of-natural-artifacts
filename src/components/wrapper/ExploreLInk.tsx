import '../../styles/explore-link/explore-link.scss';

type ExploreLInkProps = {
    url: URL;
}

export const ExploreLInk = (props: ExploreLInkProps) => {
    return (
        <a
            href={props.url.href}
            target='_blank'
            className='explore-link'>Исследовать</a>
    );
}