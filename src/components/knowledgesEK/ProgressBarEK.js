import React from 'react';

const ProgressBarEK = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Année d'expérience</span>
                <span>2 ans</span>
                <span>4 ans</span>

            </div>

            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears *100 + "%";

                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBarEK" style={{width:progressBar}}></div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBarEK;