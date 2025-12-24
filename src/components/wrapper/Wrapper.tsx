import '../../styles/wrapper/wrapper.scss';
import '../../styles/wrapper/wrapper__heading.scss';
import '../../styles/wrapper/wrapper__description.scss';
import '../../styles/wrapper/wrapper--adaptive.scss';
import {ExploreLInk} from "./ExploreLInk.tsx";

type WrapperProps = {
    wrapperText: { heading: string, description: string, link: URL };
}

export const Wrapper = (props: WrapperProps) => {
    return (
        <div className='wrapper wrapper--adaptive'>
            <div>
                <h1 className='wrapper__heading'>{props.wrapperText.heading}</h1>
                <p className='wrapper__description'>{props.wrapperText.description}</p>
                <ExploreLInk url={props.wrapperText.link}/>
            </div>
        </div>
    );
}