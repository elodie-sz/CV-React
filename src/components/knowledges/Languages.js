import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp: 3},
            {id: 2, value: "CSS", xp: 3},
            {id: 3, value: "PHP", xp: 3},
            {id: 4, value: "C++", xp: 1}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 2},
            {id: 2, value: "Symfony", xp: 2.5},
            {id: 3, value: "Sass", xp: 1.5},
            {id: 4, value: "Bootstrap", xp: 3}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;
