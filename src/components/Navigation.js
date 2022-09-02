import React from 'react';
import {NavLink, navLink} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {ButtonGroup, DropdownButton} from "react-bootstrap";

const Navigation = () => {
    return (

        <div className="sidebar">
            <div className="id">
                <div className="idContent">

                    <img src="./media/deveno.png" alt="Logo"/>

                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact="true" to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <div className="navigation">
                        <div className="mb-2">
                            {['end'].map((direction) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Elodie ${direction} `}
                                >
                                    <Dropdown.Item eventKey="1">
                                        <NavLink exact="true" to="/competencesEK" activeClassName="navActive">
                                            <i className="fas fa-mountain"></i>
                                            <span>Compétences</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                        <NavLink exact="true" to="/portfolioEK" activeClassName="navActive">
                                            <i className="fas fa-images"></i>
                                            <span>Portfolio</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3">
                                        <NavLink exact="true" to="/contactEK" activeClassName="navActive">
                                            <i className="fas fa-address-book"></i>
                                            <span>Contact</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">
                                        <NavLink exact="true" to="/savoirFaireEK" activeClassName="navActive">
                                            <i className="fas fa-mountain"></i>
                                            <span>Savoir-faire</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                        <div className="mb-2">
                            {['end'].map((direction) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Rarib ${direction} `}
                                >
                                    <Dropdown.Item eventKey="1">
                                        <NavLink exact="true" to="/competences" activeClassName="navActive">
                                            <i className="fas fa-mountain"></i>
                                            <span>Compétences</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                        <NavLink exact="true" to="/portfolio" activeClassName="navActive">
                                            <i className="fas fa-images"></i>
                                            <span>Portfolio </span>
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3">
                                        <NavLink exact="true" to="/contact" activeClassName="navActive">
                                            <i className="fas fa-address-book"></i>
                                            <span>Contact</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">
                                        <NavLink exact="true" to="/savoirFaireEK" activeClassName="navActive">
                                            <i className="fas fa-mountain"></i>
                                            <span>Savoir-faire</span>
                                        </NavLink>
                                    </Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>

                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic"  className="btn btn-sm ">
                                Elodie
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="super-colors">
                                <Dropdown.Item>
                                    <li>
                                    <NavLink exact="true" to="/competencesEK" activeClassName="navActive">
                                        <i className="fas fa-mountain"></i>
                                        <span>Compétences Elodie KSIAZEK</span>
                                    </NavLink>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <li>
                                    <NavLink exact="true" to="/portfolioEK" activeClassName="navActive">
                                        <i className="fas fa-images"></i>
                                        <span>Portfolio Elodie KSIAZEK</span>
                                    </NavLink>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <li>
                                    <NavLink exact="true" to="/contactEK" activeClassName="navActive">
                                        <i className="fas fa-address-book"></i>
                                        <span>Contact <br/> Elodie KSIAZEK</span>
                                    </NavLink>
                                    </li>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                Rarib
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <li>
                                    <NavLink exact="true" to="/competences" activeClassName="navActive">
                                        <i className="fas fa-mountain"></i>
                                        <span>Compétences</span>
                                    </NavLink>
                                    </li>
                                    </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    <li>
                                    <NavLink exact="true" to="/portfolio" activeClassName="navActive">
                                        <i className="fas fa-images"></i>
                                        <span>Portfolio</span>
                                    </NavLink>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    <li>
                                    <NavLink exact="true" to="/contact" activeClassName="navActive">
                                        <i className="fas fa-address-book"></i>
                                        <span>Contact</span>
                                    </NavLink>
                                    </li>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <li>
                                        <NavLink exact="true" to="/savoirFaire" activeClassName="navActive">
                                            <i className="fas fa-mountain"></i>
                                            <span>Savoir-faire</span>
                                        </NavLink>
                                    </li>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>


                    {/*
                    <li>
                        <NavLink exact="true" to="/savoirFaireEK" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Savoir-faire Elodie KSIAZEK</span>
                        </NavLink>
                    </li> */}

                </ul>
            </div>

            {/* <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/rarib-laamimat/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/MattCornicDev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MattCornic" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
            </div> */}

        </div>
    );
};

export default Navigation;
