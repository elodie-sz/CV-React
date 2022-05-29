import React from 'react';

const Hobbies = () => {
    return (
        <div>
            <div className="hobbies">
                <h3>Interêts</h3>
                <ul>
                    <li className="hobby"><i className="fas fa-running"></i><span>Course à pied</span></li>
                    <li className="hobby"><i className="fas fa-gamepad"></i><span>Jeu Vidéo</span></li>
                    <li className="hobby"><i className="fas fa-seedling"></i><span>Musculation</span></li>
                    <li className="hobby"><i className="fab fa-bitcoin"></i><span>Crypto-monnaie</span></li>
                    <li className="hobby"><i className="fas fa-rocket"></i><span>science</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;