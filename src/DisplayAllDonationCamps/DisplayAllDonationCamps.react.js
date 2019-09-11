import React from 'react';

import './DisplayAllDonationCamps.css';

const DisplayAllDonationCamps = (props) => {
    // console.log("Display All Donation Camps called");
    return (
        <div className='displayalldonationcamps_wrapper'>
            {/* the bootstrap grid */}
            <div className="row text-center">
                {
                    // create a map of campList and iterate on that using index
                    props.campList.map((eachCamp,index)=>{
                        return(
                            <div className="col-sm-3" key={index}>
                                {/* each card */}
                                <div className="thumbnail">
                                    <p><b>{eachCamp.camp_name}</b></p>
                                    
                                    <p>{eachCamp.startDate}</p>
                                    <p>{eachCamp.endDate}</p>
                                    {/* <p>{eachCamp.phone_number}</p> */}
                                    <p>{eachCamp.address}</p>
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

export default DisplayAllDonationCamps;