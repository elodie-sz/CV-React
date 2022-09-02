 import React from 'react';
 import Navigation from "../components/Navigation";
 import KnowHow from "../components/savoirFaire/KnowHow";


 const SavoirFaire = () => {
     return (
         <div className="home">
             <Navigation />
             <div className="homeContent">
                 <KnowHow />
             </div>
         </div>

     );
 };

 export default SavoirFaire;

