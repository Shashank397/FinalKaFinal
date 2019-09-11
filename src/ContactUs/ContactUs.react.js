import React from 'react';

import './ContactUs.css';

const ContactUs = () => {

    return (
        <div className='contactus_wrapper'>
            <div></div>
            <table>
                    <tbody>
                        <tr>
                            <td>Name:</td><td><input type="text" name="name" id="name" value=""></input> 
                            <span>*</span>required</td></tr>
                    <tr><td>Email Address:</td><td><input type="text" name="email" id="email"> </input>
                    <span>*</span>required</td></tr>

                    <tr><td>Subject:</td><td><input type="text" name="subject" id="subject"> </input><span >*
                    </span>required</td></tr>
                    <tr><td></td><td>Your message:<br></br><textarea name="message" id="message" ></textarea></td></tr>
                    <tr><td></td><td><div id="cmsg"></div></td></tr></tbody>
                </table>
            <div className='jumbotron'></div> 
        </div>
    );

}

export default ContactUs;