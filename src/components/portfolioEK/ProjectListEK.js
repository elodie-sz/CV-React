import React, {Component} from 'react';
import { portfolioDataEK } from "../../data/portfolioDataEK";
import Project from "./ProjectEK";

class ProjectListEK extends Component {
    state = {
        projects:portfolioDataEK,
        radios: [
            {id:1, value:"javascript"},
            {id:2, value: "css"},
            {id:3, value: "Wordpress"},
            {id:4, value: "php"}
        ],
        selectedRadio: 'css'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projects, radios, selectedRadio} = this.state;

        return (
            <div className="porfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })

                    }

                </ul>
                <div className="projects">
                    {
                        projects
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => {
                            return(
                                <Project
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectListEK;