import '../../styles/wrapper/wrapper.scss';
import '../../styles/wrapper/__heading/wrapper__heading.scss';
import '../../styles/wrapper/__description/wrapper__description.scss';
import '../../styles/wrapper/wrapper--adaptive.scss';
import {ExploreLInk} from "./ExploreLInk.tsx";
import type {IBannerData} from "../../model/interfaces/IBannerData.ts";

type WrapperProps = {
    dataWrapper: IBannerData;
}

export const Wrapper = ({dataWrapper}: WrapperProps) => {
    return (
        <div className='wrapper wrapper--adaptive'>
            <div>
                <h1 className='wrapper__heading'>{dataWrapper.getTitle()}</h1>
                <p className='wrapper__description'>{dataWrapper.getDescription()}</p>
                <ExploreLInk url={dataWrapper.getUrl()}/>
            </div>
        </div>
    );
}