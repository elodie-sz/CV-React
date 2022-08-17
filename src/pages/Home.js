import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
           <Navigation />
            <div className="homeContent">
                <div className="content">

                    <h2>Développeurs Full Stack</h2>


                    <p>Paragrapheeeeeeeeeeeeeeeee</p>

                    <div className="pdf">
                        <a href="./media/resume.pdf" target="_blank">CV de Rarib LAAMIMAT</a>
                        <a href="./media/resume.pdf" target="_blank">CV d'Elodie KSIAZEK</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;