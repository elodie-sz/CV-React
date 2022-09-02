import React from 'react';
import Navigation from "../components/Navigation";
import KnowHowEK from "../components/savoirFaireEK/KnowHowEK";


const SavoirFaireEK = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <KnowHowEK />
            </div>
        </div>
    );
};

export default SavoirFaireEK;

