import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginNav.css';

const LoginNav = () => {

    return (
        <div className="dropdown">
        <button class="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Login
        </button>
        
         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to='/adminLogin'>Admin</Link>
        <Link className="dropdown-item" to='/patientLogin'>Patient</Link>
        <Link className="dropdown-item" to='/donorLogin'>Donor</Link>
        {/* <a className="dropdown-item" href="/login">Admin</a>
        <a className="dropdown-item" href="/login">Patient</a>
        <a className="dropdown-item" href="/login">Donor</a> */}
        </div>
        </div>  
        
    );

}

export default LoginNav;