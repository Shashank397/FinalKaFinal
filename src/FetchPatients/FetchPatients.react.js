import React from 'react';

import './FetchPatients.css';
import DisplayAllPatientsGrid from '../DisplayAllPatientsGrid/DisplayAllPatientsGrid.react';

class FetchPatients extends React.Component {
    constructor(props) {
        super(props);
        // state stores patient array json in response
        // loaded is changed to true after the fetch componentDidMount() executes successfully  
        this.state={
            response:[],
            loaded:false
        }
    }
    componentDidMount(){
        console.log("Fetch Patients Component Mounted");
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
            this.setState()
        
        // console.log(url+" loaded: "+ this.state.loaded);
        // console.log(this.state.response);
            
    }

    render() {
        //If state is not loaded display loading...
        if(!this.state.loaded){
            return (
                <div className='fetchpatients_wrapper'>
                    <p align="center">Loading!!!</p>
                </div>
            );
           }
        //    when state is true i.e. fetch is successful
           else{
            return (
                <div className='fetchpatients_wrapper'>
                    {/* pass the json data as patientList to DisplayAllPatientsGrid */}
                    <DisplayAllPatientsGrid patientList={this.state.response}>
                    {this.state.response}
                    </DisplayAllPatientsGrid>
                </div>
            );
           }
    }
}

export default FetchPatients;