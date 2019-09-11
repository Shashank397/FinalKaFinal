import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from '../Login/Login.react';
import Home from '../Home/Home.react';
import PatientRegister from '../PatientRegister/PatientRegister.react';
import DonorRegister from '../DonorRegister/DonorRegister.react';
import AboutUs from '../AboutUs/AboutUs.react';
import BloodTips from '../BloodTips/BloodTips.react';
import ContactUs from '../ContactUs/ContactUs.react';
import AddBloodBank from '../AddBloodBank/AddBloodBank.react';
import AddDonationCamp from '../AddDonationCamp/AddDonationCamp.react';

export const Content = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/registerpatient" component={PatientRegister}></Route>
                <Route path="/registerdonor" component={DonorRegister}></Route>
                <Route  path="/patientLogin" component={()=><Login name="Patient Login"/>} ></Route>
                <Route  path="/adminLogin" component={()=><Login name="Admin Login"/>} ></Route>
                <Route  path="/donorLogin" component={()=><Login name="Donor Login"/>} ></Route> 
                <Route  path="/aboutus" component={AboutUs} ></Route> 
                <Route  path="/bloodtips" component={BloodTips} ></Route> 
                <Route  path="/contactus" component={ContactUs} ></Route> 
                <Route path="/addbloodbank" component={AddBloodBank}></Route>
                <Route path="/adddonation" component={AddDonationCamp}></Route>
                 
                 
                 

            </Switch>
        </div>
    )
}
export default Content;