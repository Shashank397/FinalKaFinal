import React from 'react';
import axios  from 'axios';

// import './AddBloodBank.css';
const proxyurl = "https://cors-anywhere.herokuapp.com/"
let url1="http://localhost:8080/addDonationCamp";
let url = proxyurl + url1;
class AddBloodBank extends React.Component {
    constructor(props) {
        super(props);
        this.state={
       newdonorList:{
         "city": "",
         // "donorList": [],
         "fromDate": "",
         "fromTime": "",
         // "id": 0,
         "name": "",
         "toDate": "",
         "toTime":"" ,
         "venue": ""
         }
        }
    }


    handleChange =(event) =>{
       
        let name = event.target.name;
        let value =event.target.value;
         // console.log(value)
          this.setState(prevState =>( {newdonorList:{...prevState.newdonorList,[name]:value}}));
          //console.log("This is : " + JSON.stringify(this.state.newdonorList))
      }

      handleSubmit =(event) =>
      {
 
          event.preventDefault();
          console.log(this.state.newdonorList);
        //   axios.post(url1,this.state.newdonorList,headers)
         fetch(url1,{
            "method":"POST",
            "body":JSON.stringify(this.state.newdonorList),
            "headers": {'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+localStorage.getItem("Token")}
        })
        .then(resp=>{ console.log(resp);console.log(resp.status)});
      }
    render() {
        return (
            <div className='card'>
                 <div className="card-body">
               
           
         <form className=" col-sm-12 " onSubmit={this.handleSubmit}>
        
         <div class="row ">
            
         
         <div class="container col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                    <h3  className="col-sm-12">Donation Camp Registeration</h3>
                                    <br/>
                                    <div className="form-group row">
                                            <label for="name" class="col-sm-4 col-form-label">Name</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="name" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            Name:
         <input type="text" name="name" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="fromDate" class="col-sm-4 col-form-label">From Date</label>
                                            <div class="col-sm-12">
                                                <input type="date" className="form-control" name="fromDate" onChange={this.handleChange} required />
                                            </div>
                                        </div>
{/*          
         <label>
            From Date:
         <input type="date" name="fromDate" onChange={this.handleChange} />
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="toDate" class="col-sm-4 col-form-label">To Date</label>
                                            <div class="col-sm-12">
                                                <input type="date" className="form-control" name="toDate" onChange={this.handleChange} required />
                                            </div>
                                        </div>

         {/* <label>
            To Date:
         <input type="date" name="toDate" onChange={this.handleChange} />
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="fromTime" class="col-sm-4 col-form-label">From Time</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="fromTime" onChange={this.handleChange} required />
                                            </div>
                                        </div>

         {/* <label>
            From Time:
         <input type="number" name="fromTime" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="toDate" class="col-sm-4 col-form-label">To Time</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="toTime" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            To Time:
         <input type="number" name="toTime" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="venue" class="col-sm-4 col-form-label">Venue</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="venue" onChange={this.handleChange} required />
                                            </div>
                                        </div>

         {/* <label>
            Venue:
         <input type="text" name="venue" onChange={this.handleChange}/>
         </label><br></br> */}
        
        <div className="form-group col-sm-12">
                                <br />
                                <input type="submit" value="SUBMIT" className="form-control btn btn-success" />
                            </div>
         </div>
         </div>
         </div>
         </div>
        </form>  
        </div>
        </div>
          
        );
    }
}

export default AddBloodBank;


