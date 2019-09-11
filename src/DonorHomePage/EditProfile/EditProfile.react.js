import React from 'react';

import './EditProfile.css';
import EditDonor from '../EditDonor/EditDonor.react';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='editprofile_wrapper'>
                <br/><br/>
                
                <EditDonor></EditDonor>
            </div>
        );
    }
}

export default EditProfile;