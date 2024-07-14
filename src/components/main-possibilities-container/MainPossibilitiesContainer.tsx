import React, {FC} from 'react';
import './MainPossibilitiesContainer.css';

interface MainPossibilitiesContainerProps{
    firstTitle?: string;
    firstDescription?: string;
    secondTitle?: string;
    secondDescription?: string;
    thirdTitle?: string;
    thirdDescription?: string;
    fourthTitle?: string;
    fourthDescription?: string;
}
const MainPossibilitiesContainer:FC<MainPossibilitiesContainerProps> = ({firstTitle, firstDescription, fourthTitle, fourthDescription, thirdDescription, secondDescription, thirdTitle, secondTitle}) => {
    return (
        <div className="main-possibilities-wrapper">
            <div className="main-possibilities-container">
                <section>
                    <h1>{firstTitle}</h1>
                    <p>{firstDescription}</p>
                </section>
                <section>
                    <h1>{secondTitle}</h1>
                    <p>{secondDescription}</p>
                </section>
                <section>
                    <h1>{thirdTitle}</h1>
                    <p>{thirdDescription}</p>
                </section>
                <section className="last-section">
                    <h1>{fourthTitle}</h1>
                    <p>{fourthDescription}</p>
                </section>

            </div>
            
        </div>
    );
};

export default MainPossibilitiesContainer;