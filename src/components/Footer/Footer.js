import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo from "../../img/logo.png"

const Footer = () => {
    return (
        <div>
            <div className="footer row text-center">
                <div className="col-md-4 details">
                    <img src={logo} alt="" />                   
                </div>

                <div className="col-md-4 about">
                <h2>About Us</h2>
                    <p>EduExpress is an online based unique means of education. Learning new skills has become nearly impossible without proper use of time. Amid all the proper use of technology EduExpress’s sole aim is to go one step forward.EduExpress is a online learning platform where you can find your desire course and can start learning now.</p>
                </div>

                <div className="col-md-4 links">
                <h2>Contact Us</h2>
                    <ul style={{listStyle:'none'}}>
                        <li style={{display:"flex"}}>
                            <i className="fas fa-map-marker-alt"></i>
                            <p style={{paddingLeft:"10px"}}>Joypurpara,Dupchanchia,Bogura-5880</p>
                        </li>

                        <li style={{display:"flex"}}>
                            <i className="fas fa-phone-alt"></i>
                            <p style={{paddingLeft:"10px"}}>+88 0198 3333 566</p>
                        </li>

                        <li style={{display:"flex"}}>
                            <i className="far fa-envelope"></i>
                            <p style={{paddingLeft:"10px"}}>info@eduexpress.com</p>
                        </li>
                    </ul>
                    <ul className="social-link">
                        <li>
                        <Link to=""><i className="text-white fs-2 fab fa-facebook-square"></i></Link>
                        </li>

                        <li>
                        <Link to=""><i className="text-white fs-2 fab fa-twitter-square"></i></Link>
                        </li>

                        <li>
                        <Link to=""><i className="text-white fs-2 fab fa-linkedin"></i></Link>
                        </li>

                        <li>
                        <Link to=""><i className="text-white fs-2 fab fa-youtube-square"></i></Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;