import React from 'react';
import DisplayDonorProfile from '../DisplayDonorProfile/DisplayDonorProfile.react';

import './DonorProfile.css';

class DonorProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response:[],
            loaded:false
        }
    }
    componentDidMount(){
        console.log("Fetch Donation Camps Component Mounted");
        // specify url of the json data
        // let donorId = this.props.donorId;
        let donorId=1
        let url="http://localhost:8080/get/"+donorId ;
        console.log(url+" loaded: "+ this.state.loaded);
        // fetch the json from the url
        fetch(url,{"headers": {'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+localStorage.getItem("Token")}}).then(resp=>resp.json()).then(
            response=>{this.setState({
                response:response,loaded:true
            });
            console.log(this.state.response);
            console.log(" loaded: "+ this.state.loaded);
            }
        );
    }

    render() {
        if(this.state.loaded){
            return (
                <div className='donorprofile_wrapper'>
                    <DisplayDonorProfile donorProfile={this.state.response}></DisplayDonorProfile>
                </div>
            );
        }
        else{
            return (
                <div className='donorprofile_wrapper'>
                    <p>Loading your profile....</p>
                </div>
            );
        }
    }
}

export default DonorProfile;