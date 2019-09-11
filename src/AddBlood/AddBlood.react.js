import React from 'react';

import './AddBlood.css';

const AddBlood = () => {

    return (
        <div className='addblood_wrapper'>
        <h1> Blood Donation Details </h1>
         <form className="formblood">
        <label>
           Organization ID:
         <input type="number" name="OrgID" />
         </label><br></br>
         <label>
            Donor ID:
         <input type="number" name="DonorID" />
         </label><br></br>
         <label>
            Blood Bank ID:
         <input type="number" name="BankID" />
         </label><br></br>
         <label>
            Blood Group:
         <input type="text" name="BloodGroup" />
         </label><br></br>
         <label>
            Amount per Unit:
         <input type="number" name="AmountUnit" />
         </label><br></br>
         
         </form>
        </div>
    );

}

export default AddBlood;