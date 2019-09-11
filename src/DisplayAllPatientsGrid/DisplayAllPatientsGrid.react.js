import React from 'react';

import './DisplayAllPatientsGrid.css';

const DisplayAllPatientsGrid = (props) => {
    // console.log("Display All Patients called");
    return (
        <div className='displayallpatientsgrid_wrapper'>
            {/* the bootstrap grid */}
            <div className="row text-center">
                {
                    // create a map of patientList and iterate on that using index
                    props.patientList.map((eachPatient,index)=>{
                        return(
                            <div className="col-sm-3" key={index}>
                                {/* each card */}
                                <div className="thumbnail">
                                    <p><b>{eachPatient.patient_name},
                                    {/* {eachPatient.age} */}
                                    </b></p>
                                    <p>{eachPatient.dob}</p>
                                    <p>{eachPatient.blood_group}</p>
                                    <p>{eachPatient.email}</p>
                                    {/* <p>{eachPatient.phone_number}</p> */}
                                    <p>{eachPatient.address.city}</p>
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

export default DisplayAllPatientsGrid;