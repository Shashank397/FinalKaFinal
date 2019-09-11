import React from 'react';

import './ShowDonor.css';
import DataGrid from '../DataGrid/DataGrid.react';

const ShowDonor = (props) => {

    return(
    <div>
    
    
        <table className='table table-striped'>
        <thead>
                <tr>
                    <th>Donor Name</th>
                    <th>Phone Number</th>
                    <th>Blood Group</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                        props.donorList.map((eachDonor, index)=>{
                            return <tr key={index}>
                                        <td>{eachDonor.donor_name}</td>
                                        <td>{eachDonor.email}</td>
                                        <td>{eachDonor.blood_group}</td>
                                        <td>{eachDonor.email}</td>
                                    </tr>
                        })
                    }        
                </tbody>
            </table>
    
   
    
</div>
    );
}

export default ShowDonor;