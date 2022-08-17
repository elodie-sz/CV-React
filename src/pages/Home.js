import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
           <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h2>Développeurs Full Stack</h2>


                    <p>Parce que le développement informatique évolue constament, parce que vous avez besoin de maintenir vos API à jour, parce que vous recherchez des développeurs compétents, passionnés qui savent travailler en équipe "WebDev" s'est constitué. Que ce soit principalement en front-end avec React nous maintenons ou créons vos applis ou que ce soit en back-end grace à Symfony vos Applications PHP prendront une autre dimension. Vous avez dit NodeJS ! Aucun soucis nous collaborons pour développer des spécialités et de répondre au mieux aux besoins de nos client. Développons ensemble vos applications qu'elle soit en cours ou pour démarrer nouveau projet React, Symfony ou NodeJS. Nous avons choisi de nous associé pour les projets à venir afin de nous épauler dans vos besoins, et répondre à plus de language de programmation. </p>


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
