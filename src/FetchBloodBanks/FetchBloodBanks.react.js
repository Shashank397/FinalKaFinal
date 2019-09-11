import React from 'react';

import './FetchBloodBanks.css';
import DisplayAllBloodBanks from '../DisplayAllBloodBanks/DisplayAllBloodBanks.react';

class FetchBloodBanks extends React.Component {
    constructor(props) {
        super(props);
        // state stores bloodbanks array json in response
        // loaded is changed to true after the fetch componentDidMount() executes successfully  
        this.state={
            response:[],
            loaded:false
        }
    }

    componentDidMount(){
        console.log("Fetch BloodBanks Component Mounted");
        // specify url of the json data
        let url="";
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
        // return (
        //     <div className='fetchbloodbanks_wrapper'>

        //If state is not loaded display loading...
        if(!this.state.loaded){
            return (
                <div className='fetchbloodbanks_wrapper'>
                    <p align="center">Fetching Blood Banks!!!</p>
                </div>
            );
           }
        //    when state is true i.e. fetch is successful
           else{
            return (
                <div className='fetchbloodbanks_wrapper'>
                    {/* pass the json data as bloodBankList to DisplayAllBloodBanks */}
                    <DisplayAllBloodBanks bloodBankList={this.state.response}>
                    </DisplayAllBloodBanks>
                </div>
            );
           }
    }
}

export default FetchBloodBanks;