import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
           <Navigation />
            <div className="homeContent">
                <div className="content">

                    <h2>Développeurs Full Stack</h2>

                    <p>Parce que le développement informatique évolue constament, parce que vous avez besoin de maintenir vos APIs à jour, parce que vous recherchez des développeurs compétents, passionnés qui savent travailler en équipe <strong>Enodev</strong> s'est constitué.
                        <br/><br/>
                        Que ce soit React NodeJS ou Symfony nous maintenons, créons vos applications PHP ou JavaScript.<br/><br/>
                        Notre collaboration est issue d'une volonté à répondre le plus efficacement possible aux besoins de nos clients.<br/><br/>
                        Développons ensemble vos APIs qu'elle soit en cours ou démarrage React, Symfony ou NodeJS, nous répondrons au mieux à vos attentes.</p>



                    <div className="pdf">
                        <a href="./media/resume.pdf" target="_blank">CV de Rarib LAAMIMAT</a>
                        <a href="./media/CV.Elodie-Ksiazek.pdf" target="_blank">CV d'Elodie KSIAZEK</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
