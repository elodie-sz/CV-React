import React from 'react';

const Hobbies = () => {
    return (
        <div>
            <div className="hobbies">
                <h3>Interêts</h3>
                <ul>
                    <li className="hobby"><i className="fas fa-running"></i><span>Course à pied</span></li>
                    <li className="hobby"><i className="fas fa-gamepad"></i><span>Jeux Vidéos</span></li>
                    <li className="hobby"><i className="fas fa-dumbbell"></i><span>Musculation</span></li>
                    <li className="hobby"><i className="fab fa-readme"></i><span>Lecture</span></li>
                    <li className="hobby"><i className="fas fa-rocket"></i><span>sciences</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbies;
