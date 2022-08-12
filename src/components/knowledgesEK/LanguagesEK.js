import React, {Component} from 'react';
import ProgressBarEK from "./ProgressBarEK";

class LanguagesEK extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp: 2},
            {id: 2, value: "CSS", xp: 2},
            {id: 3, value: "PHP", xp: 2},
            {id: 4, value: "C++", xp: 0.4}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 1.8},
            {id: 2, value: "CodeIgniter", xp: 2},
            {id: 3, value: "Sass", xp: 1.5},
            {id: 4, value: "Bootstrap", xp: 2}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBarEK
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBarEK
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default LanguagesEK;