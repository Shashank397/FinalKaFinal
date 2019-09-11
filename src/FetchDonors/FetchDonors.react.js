import React from 'react';

import './FetchDonors.css';
import DisplayAllDonorsGrid from '../DisplayAllDonorsGrid/DisplayAllDonorsGrid.react';

class FetchDonors extends React.Component {
    constructor(props) {
        super(props);
        
        // state stores donor array json in response
        // loaded is changed to true after the fetch componentDidMount() executes successfully  
        this.state={
            response:[],
            loaded:false
        }
    }
componentDidMount(){
    console.log("Fetch Donors Component Mounted");
    // specify url of the json data
    let url="http://localhost:5600/data";
    // console.log(url+" loaded: "+ this.state.loaded);
    // fetch the json from the url
    fetch(url).then(resp=>resp.json()).then(
        response=>{this.setState({
            response:response,loaded:true});
            console.log(this.state.response);
            console.log(" loaded: "+ this.state.loaded);
        }
    );
    
    // console.log(this.state.response);
}

    render() {
        //If state is not loaded display loading...
        if(!this.state.loaded){
        return (
            <div className='fetchdonors_wrapper'>
                <p align="center">Fetching Donors!!!</p>
            </div>
        );
       }
    //    when state is true i.e. fetch is successful
       else{
        return (
            <div className='fetchdonors_wrapper'>
                {/* pass the json data as donorList to DisplayAllDonorsGrid */}
                <DisplayAllDonorsGrid donorList={this.state.response}>
                </DisplayAllDonorsGrid>
            </div>
        );
       }
    }
}

export default FetchDonors;