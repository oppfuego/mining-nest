import React, {FC} from 'react';
import { GrFormCheckmark } from "react-icons/gr";
import './PosibilitiesContainer.css';

interface PosibilitiesContainerProps {
    firstText?: string;
    secondText?: string;
    thirdText?: string;
    image?: string;
}

const PosibilitiesContainer: FC<PosibilitiesContainerProps>= ({firstText, secondText, thirdText, image}) => {
    return (
        <div className="posibilities-container-wrapper">
            <div className="posibilities-container">
                <h4><GrFormCheckmark size={30}/>{firstText}</h4>

                <h4><GrFormCheckmark size={30}/>{secondText}</h4>

                <h4><GrFormCheckmark size={30}/>{thirdText}</h4>
            </div>
        </div>
    );
};

export default PosibilitiesContainer;