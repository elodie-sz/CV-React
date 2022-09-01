import React from 'react';

const Hobbies = () => {
    return (
        <div>
            <div className="hobbies">
                <h3>Savoir être</h3>
                <ul>
                    <li><i className="fas fa-check-square"></i><span>Autonomie</span></li>
                    <li><i className="fas fa-check-square"></i><span>Capacité d'adaptation</span></li>
                    <li><i className="fas fa-check-square"></i><span>Sens de l'organisation</span></li>
                    <li><i className="fas fa-check-square"></i><span>Force de proposition</span></li>
                    <li><i className="fas fa-check-square"></i><span>Persévérance</span></li>
                </ul>
               {/* <ul>
                    <li className="hobby"><i className="fas fa-running"></i><span>Course à pied</span></li>
                    <li className="hobby"><i className="fas fa-gamepad"></i><span>Jeu Vidéo</span></li>
                    <li className="hobby"><i className="fas fa-seedling"></i><span>Musculation</span></li>
                    <li className="hobby"><i className="fab fa-bitcoin"></i><span>Crypto-monnaie</span></li>
                    <li className="hobby"><i className="fas fa-rocket"></i><span>science</span></li>
                </ul>*/}
            </div>
        </div>
    );
};

export default Hobbies;
