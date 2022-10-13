import React from 'react';
import Navigation from "../components/Navigation";
import KnowHowEK from "../components/savoirFaireEK/KnowHowEK";


const SavoirFaireEK = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <KnowHowEK />
            </div>
        </div>
    );
};

export default SavoirFaireEK;

