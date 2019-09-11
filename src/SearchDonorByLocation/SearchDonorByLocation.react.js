import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './SearchDonorByLocation.css';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import axios from 'axios';
let bloodId,location;
class SearchDonorByLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            donorList:[]
        }
    }
    handleClick=(event)=>{
        event.preventDefault();
        console.log(bloodId);
        console.log(location);
        
        let url="http://localhost:1013/search";
        console.log(url+"/"+bloodId);

       // fetch(url).then(resp=>resp.json()).then(donorList=>{this.setState({donorList:donorList,loaded:true})});
      
         axios.get(url+"/"+bloodId).then((response) =>{console.log(response.data);this.setState({donorList:response.data,loaded:true})}).catch((error) => {
        console.log("error",error.response.status)
      });
        
        console.log("Ji")
    }
    handleChange1 = event => {
       
        bloodId=event.target.value;
    }

    handleChange = event => {
       
        location=event.target.value;
    }
    render()
    
     {
        console.log(this.state.loaded+"Hi");
        if(!this.state.loaded)
    {
        return (

            
<form onSubmit={this.handleClick}>
    <br/>
    <br/>
    <div class="row container">        
            <div class="form-group"className="col-md-3">
            <label for="Blood Group">Select Blood Group</label>
            <select class="form-control" id="id"  onChange={this.handleChange1}>
            <option>O+ve</option>
            <option>O-ve</option>
            <option>A+ve</option>
            <option>A-ve</option>
            <option>B+ve</option>
            <option>B-ve</option>
            <option>AB+ve</option>
            <option>AB-ve</option>
            <option>B+ve</option>
            <option>O+</option>
            </select>
    </div>
            
    <div class="form-group" className="col-md-3">
    <label for="Location" >Location</label>
    <select class="form-control" id="location" onChange={this.handleChange}  >
      <option>Chennai</option>
      <option>Mumbai</option>
      <option>Bangalore</option>
      <option>Kolkata</option>
      <option>Delhi</option>
      <option>Pune</option>
      <option>Chandigarh</option>
      <option>Lucknow</option>
      <option>Jaipur</option>
      <option>Hyderabad</option>
      <option>CH</option>
    </select>
    </div>
            
     <div class="form-group">
          <br/>
          <br/>
          <br/>

            <button class="col-sm-5" type="submit" class="btn btn-secondary">Suit</button>
            </div>
            </div>

</form>
           
          
            
            
        );
    }
    else{
        return(

            <div>
        <ShowDonor donorList = {this.state.donorList}></ShowDonor>
        </div>
        );

    }
    }
}

export default SearchDonorByLocation;