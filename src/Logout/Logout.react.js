import React from 'react';

import './Logout.css';

const validate=(event) =>
{
    event.preventDefault();
    localStorage.removeItem("Token");
    window.location="/"
}


const Logout = () => {
  
   
    
    return (
        <div className='logout_wrapper'>
            <button className="btn btn-danger" id='logoutbtn'  onClick={validate} style={{display:"none"}}>Logout</button>
        </div>
    );

}

export default Logout;