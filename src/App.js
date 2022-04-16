import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/competences" component={Knowledges} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;