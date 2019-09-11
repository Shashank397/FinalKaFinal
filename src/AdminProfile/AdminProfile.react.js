import React from 'react';
import AddBloodBank from '../AddBloodBank/AddBloodBank.react';
import AddDonationCamp from '../AddDonationCamp/AddDonationCamp.react';
import './AdminProfile.css';
import {Link} from 'react-router-dom';

const AdminProfile = () => {

    return (
        <div className='adminprofile_wrapper container '>
            
        <div className="container row col-sm-12">
             <h5 className="col-sm-2">Found a new Bank?</h5>    
            <Link to="/addbloodbank">
                
                <button className="btn btn-success btn-lg col-sm-12">Add Blood Bank</button></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h5 className="col-sm-2">Have a new camp?</h5>
            <Link to="/adddonation">
                <button className="btn btn-success btn-lg col-sm-12">Add Donation Camp</button></Link>
        </div>    
        </div>
    );

}

export default AdminProfile;