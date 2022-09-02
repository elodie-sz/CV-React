 import React from 'react';
 import Navigation from "../components/Navigation";
 import KnowHow from "../components/savoirFaire/KnowHow";


 const SavoirFaire = () => {
     return (
         <div className="knowledges">
             <Navigation />
             <div className="knowledgesContent">
                 <KnowHow />
             </div>
         </div>

     );
 };

 export default SavoirFaire;

