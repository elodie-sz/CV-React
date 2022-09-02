import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import ContactEK from "./pages/ContactEK";
import Home from './pages/Home';
import Knowledges from "./pages/knowledges";
import KnowledgesEK from "./pages/knowledgesEK";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import PortfolioEK from "./pages/PortfolioEK";
import savoirFaire from "./pages/SavoirFaire";
import SavoirFaire from "./pages/SavoirFaire";
import KnowHowEK from "./components/savoirFaire/KnowHowEK";



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    {/* <Route path="/savoirFaire" element={<KnowHow />} />
                    <Route path="/savoirFaireEK" element={<KnowHowEK />} /> */}
                    <Route path="/competences" element={<Knowledges />} />
                    <Route path="/competencesEK" element={<KnowledgesEK />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolioEK" element={<PortfolioEK />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contactEK" element={<ContactEK />} />
                    <Route path="/savoirFaire" element={<SavoirFaire />} />
                    <Route path="/savoirFaireEK" element={<KnowHowEK />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
