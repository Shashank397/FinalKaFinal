import React from 'react';

import './DisplayAllDonorsGrid.css';

const DisplayAllDonorsGrid = (props) => {
    // console.log("Display All Donors called");
    return (
        <div className='displayalldonorsgrid_wrapper'>
            {/* the bootstrap grid */}
            <div className="row text-center">
                {
                    // create a map of donorList and iterate on that using index
                    props.donorList.map((eachDonor,index)=>{
                        return(
                            <div className="col-sm-3" key={index}>
                                {/* each card */}
                                <div className="thumbnail">
                                    <p><b>{eachDonor.donor_name},
                                    {/* {eachDonor.age} */}
                                    </b></p>
                                    <p>{eachDonor.dob}</p>
                                    <p>{eachDonor.blood_group}</p>
                                    <p>{eachDonor.email}</p>
                                    {/* <p>{eachDonor.phone_number}</p> */}
                                    <p>{eachDonor.address.city}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );

}

export default DisplayAllDonorsGrid;