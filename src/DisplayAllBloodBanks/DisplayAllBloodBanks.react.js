import React from 'react';

import './DisplayAllBloodBanks.css';

const DisplayAllBloodBanks = (props) => {
    // console.log("Display All BloodBanks called");
    return (
        <div className='displayallbloodbanks_wrapper'>
            {/* the bootstrap grid */}
            <div className="row text-center">
                {
                    // create a map of bloodBankList and iterate on that using index
                    props.bloodBankList.map((eachBank,index)=>{
                        return(
                            <div className="col-sm-3" key={index}>
                                {/* each card */}
                                <div className="thumbnail">
                                    <p><b>{eachBank.bloodbank_name}</b></p>
                                    
                                    <p>{eachBank.blood_group}</p>
                                    <p>{eachBank.blood_amount}</p>
                                    <p>{eachBank.email}</p>
                                    <p>{eachBank.phone_number}</p>
                                    <p>{eachBank.address}</p>
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

export default DisplayAllBloodBanks;