import React from 'react';

import './DisplayDonorProfile.css';

const DisplayDonorProfile = (props) => {

    return (
//         <div>
    
    
//         <table className='table table-striped'>
//         <thead>
//                 <tr>
//                     <th>Donor Name</th>
//                     <th>Phone Number</th>
//                     <th>Blood Group</th>
//                     <th>Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                         props.donorProfile.map((eachDonor, index)=>{
//                             return <tr key={eachDonor.email}>
//                                         <td>{eachDonor.donor_name}</td>
//                                         <td>{eachDonor.bloodGroup}</td>
//                                         <td>{eachDonor.city}</td>
//                                         <td>{eachDonor.email}</td>
//                                     </tr>
//                         })
//                     }        
//                 </tbody>
//             </table>
    
   
    
// </div>

        // <div className='displaydonorprofile_wrapper'>
        //     <p>{props.donorProfile.donor_name}</p>
        //     <p>{props.donorProfile.bloodGroup}</p>
        //     <p>{props.donorProfile.city}</p>
        //     <p>{props.donorProfile.location}</p>
        //     <p>{props.donorProfile.country}</p>
        //     <p>{props.donorProfile.phone_number}</p>
        //     <p>{props.donorProfile.donor_availability}</p>
            
        // </div>
        <div className='displaydonorprofile_wrapper'>
        <div className="container-fluid bg-grey">
            <div className="row">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-globe logo"></span>
                </div>
                <div className="col-sm-8">
                    <h4>{props.donorProfile.donor_name}</h4>
                    <p>{props.donorProfile.bloodGroup}</p>
                    <p>{props.donorProfile.city}</p>
                    <p>{props.donorProfile.location}</p>
                    <p>{props.donorProfile.country}</p>
                    <p>{props.donorProfile.phone_number}</p>
                    <p>{props.donorProfile.donor_availability}</p>
            
                </div>
            </div>
        </div>
    </div>
    );

}

export default DisplayDonorProfile;