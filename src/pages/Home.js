import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
           <Navigation />
            <div className="homeContent">
                <div className="content">

                    <h2>Devéno</h2>

                    <p>Devéno est le fruit d'une collaboration entre deux développeurs originaire de la province du grand Hainaut  et partageant la même passion pour le developpement d'applications web, mobile et jeux vidéos.<br/>
                        S'estimant chanceux vivre une période prospère en matière de technologie permettant d'améliorer le quotidien comme jamais, nous avons decidé de joindre nos efforts et compétences pour multiplier nos ressources.<br/>
                        Le développement informatique évolue constament, si vous avez besoin de maintenir vos APIs à jour, Si vous êtes à la recherche de développeurs compétents, passionnés maitrisant le travaille d'équipe. Nous serons ravi de contribuer à vos projets.
                        <br/><br/>
                    </p>
                    <h2>A propos</h2>
                    <p>Ce site est crée en ReactJS</p>


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
