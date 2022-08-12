import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard";

const ContactEK = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi !</h1>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i>
                            <span>Douai</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0781842369">
                                <span className="clickInput"
                                      onClick={() => {
                                          alert('Téléphone copié')
                                      }}>
                                    07.81.84.23.69
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="elodie.siaze@gmail.com">
                                <span className="clickInput"
                                      onClick={() => {
                                          alert('Email copié')
                                      }}>
                                    elodie.siaze@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/elodie-ksiazek-68508119b/" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactEK;