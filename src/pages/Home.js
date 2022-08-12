import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
           <Navigation />
            <div className="homeContent">
                <div className="content">
                   <h1>Rarib LAAMIMAT Elodie KSIAZEK </h1>
                    <h2>Développeurs Full Stack</h2>
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