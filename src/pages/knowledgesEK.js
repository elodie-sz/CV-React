import React from 'react';
import Navigation from "../components/Navigation";
import LanguagesEK from "../components/knowledgesEK/LanguagesEK";
import ExperienceEK from "../components/knowledgesEK/ExperienceEK";
import OtherSkillsEK from "../components/knowledgesEK/OtherSkillsEK";
import HobbiesEK from "../components/knowledgesEK/HobbiesEK";

const KnowledgesEK = () => {
    return (
        <div className="knowledgesEK">
            <Navigation />
            <div className="knowledgesContent">
                <LanguagesEK />
                <ExperienceEK />
                <OtherSkillsEK />
                <HobbiesEK />
            </div>
        </div>
    );
};

export default KnowledgesEK;