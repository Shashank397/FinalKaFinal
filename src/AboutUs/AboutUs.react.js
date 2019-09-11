import React from 'react';

import './AboutUs.css';

const AboutUs = () => {

    return (
        <div class="widget-item-about">
        <div class="container about">
        <div class="row">
        <div class="about-content-left">
            <br>
            </br>
            <br></br>
            <br></br>
        <h2 class="welcome-text">About Us</h2>
        <p>VeriLife is Blood Bank Management System (BBMS) which aims to provide transparency in making the process of obtaining blood from a blood bank hassle free and corruption free and make the system of blood bank management effective.</p>
        </div>
        <div class="about-content-right"> 
        <h4>People Project from Verizon India</h4>
        <br></br>
        <br></br>
        <div class="about-logo"> 
        <img src="VeriLife.PNG" alt="VeriLife"></img>
        </div> 
        {/* <p>Provides transparency in this field, make the process of obtaining blood from a blood bank hassle free and corruption free and make the system of blood bank management effective.</p> <span><a href="/" target="_blank">more info</a></span> */}
        </div>
        </div>
        </div>
        </div>
    );

}

export default AboutUs;