import '../../styles/wrapper/wrapper.scss';
import '../../styles/wrapper/wrapper__heading.scss';
import '../../styles/wrapper/wrapper__description.scss';
import '../../styles/wrapper/wrapper--adaptive.scss';
import {ExploreLInk} from "./ExploreLInk.tsx";
import type {WrapperData} from "../../props-interfaces/WrapperData.ts";

export const Wrapper = (props: WrapperData) => {
    return (
        <div className='wrapper wrapper--adaptive'>
            <div>
                <h1 className='wrapper__heading'>{props.heading}</h1>
                <p className='wrapper__description'>{props.description}</p>
                <ExploreLInk url={props.link}/>
            </div>
        </div>
    );
}