import React from 'react';
import "./Aboutus.css"
import logo from "../../img/full-logo.png"
import banner from "../../img/about-2.jpg"
import certificate from "../../img/certificate.png"

const AboutUs = () => {
    return (
        <div className="aboutus">
            <div className="row p-4">
                <div className="col-md-8 about-text">
                    <h1>About Us</h1>
                    <p>EduExpress is an online based unique means of education. Learning new skills has become nearly impossible without proper use of time. Amid all the proper use of technology EduExpress’s sole aim is to go one step forward.EduExpress is a online learning platform where you can find your desire course and can start learning now.</p>
                </div>
                <div className="col-md-4 p-4">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="row p-4">
                <div className="col-md-6 p-4">
                    <img src={banner} alt="" />
                </div>
                <div className="col-md-6 p-4 d-flex align-items-center">
                    <div>
                    <h3>Professional Certificate Courses (Online)</h3>
                    <ul>
                        <li><p>Online certificates can be obtained in a range of specialized areas.</p></li>
                        <li><p>Online diplomas are awarded for one to two years of study with LMS.</p></li>
                        <li><p>Online associate degrees usually take approximately two years then.</p></li>
                        <li><p>Online preparatory year programs are an opportunity for students.</p></li>
                        <li><p>Online Summer courses are a great way to gain qualifications.</p></li>
                    </ul>
                    </div>
                </div>
            </div>
        
            <div className="certificates row p-4">
                <h2>Certificates</h2>
                <div className="col-md-4 p-4">
                    <img className="img-fluid" src={certificate} alt="" />
                </div>

                <div className="col-md-4 p-4">
                    <img className="img-fluid" src={certificate} alt="" />
                </div>

                <div className="col-md-4 p-4">
                    <img className="img-fluid" src={certificate} alt="" />
                </div>
            </div>
        
        </div>
    );
};

export default AboutUs;