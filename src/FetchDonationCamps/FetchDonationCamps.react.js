import React from 'react';

import './FetchDonationCamps.css';
import DisplayAllDonationCamps from '../DisplayAllDonationCamps/DisplayAllDonationCamps.react';

class FetchDonationCamps extends React.Component {
    constructor(props) {
        super(props);
        // state stores donation camps array json in response
        // loaded is changed to true after the fetch componentDidMount() executes successfully  
        this.state={
            response:[],
            loaded:false
        }
    }

    componentDidMount(){
        console.log("Fetch Donation Camps Component Mounted");
        // specify url of the json data
        let url="http://localhost:3000/bloodCamp";
        console.log(url+" loaded: "+ this.state.loaded);
        // fetch the json from the url
        fetch(url).then(resp=>resp.json()).then(
            response=>{this.setState({
                response:response,loaded:true
            });
            console.log(this.state.response);
            console.log(" loaded: "+ this.state.loaded);
            }
        );
        
        console.log(this.state.response);
    }
    render() {
        
        //If state is not loaded display loading...
        if(!this.state.loaded){
            return (
                <div className='fetchdonationcamps_wrapper'>
                    <p align="center">Loading Donation Camps!!!</p>
                </div>
            );
           }
        //    when state is true i.e. fetch is successful
           else{
            return (
                <div className='fetchdonationcamps_wrapper'>
                    {/* pass the json data as campList to DisplayAllDonationCamps */}
                    <DisplayAllDonationCamps campList={this.state.response}>
                    </DisplayAllDonationCamps>
                </div>
            );
           }
    }
}

export default FetchDonationCamps;