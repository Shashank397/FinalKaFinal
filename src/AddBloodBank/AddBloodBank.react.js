import React from 'react';
import axios  from 'axios';


// import './AddBloodBank.css';
//const proxyurl = "https://cors-anywhere.herokuapp.com/"
let url1="http://localhost:8080/addBloodBank";
//let url = proxyurl + url1;
class AddBloodBank extends React.Component {
    constructor(props) {
        super(props);
        this.state={
       newdonorList:{
        "blood_bank_id":0,
        "blood_bank_name":"",
        "phone_number":0,
        "city":"",
        "state":"",
        "country":"",
        "pincode":0,
        "address":"",
        "email":"",
        "effective_date":"",
        "opos":"",
        "oneg":"",
        "apos":"",
        "aneg":"",
        "bpos":"",
        "bneg":"",
        "abpos":"",
        "abneg":"",
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
          
         <form className="container" onSubmit={this.handleSubmit}>
         <h1>Blood Bank Registeration</h1>
         <div class="row">
         <div class="col-sm-6">
         <div class="card">
             <div class="card-body">
             <h5 class="card-title">Camp Details</h5>
             <div className="form-group row">
                                            <label for="blood-bank_name" class="col-sm-4 col-form-label">Name</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="blood_bank_name" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            Name:
         <input type="text" name="blood_bank_name" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="phone_number" class="col-sm-4 col-form-label">Phone Number</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="phone_number" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            Phone Number:
         <input type="number" name="phone_number" onChange={this.handleChange} />
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="email" class="col-sm-4 col-form-label">Email</label>
                                            <div class="col-sm-12">
                                                <input type="email" className="form-control" name="email" onChange={this.handleChange} required />
                                            </div>
                                        </div>

         {/* <label>
            Email:
         <input type="email" name="email" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="address" class="col-sm-4 col-form-label">Local Address</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="address" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            Local Address:
         <input type="text" name="address" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="pincode" class="col-sm-4 col-form-label">Pincode</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="pincode" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            Pincode:
         <input type="text" name="pincode" onChange={this.handleChange}/>
         </label><br></br> */}

<div className="form-group row">
                                            <label for="city" class="col-sm-4 col-form-label">City</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="city" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            City:
         <input type="text" name="city" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="state" class="col-sm-4 col-form-label">State</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="state" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            State:
         <input type="text" name="state" onChange={this.handleChange}/>
         </label><br></br> */}
          <div className="form-group row">
                                            <label for="country" class="col-sm-4 col-form-label">Country</label>
                                            <div class="col-sm-12">
                                                <input type="text" className="form-control" name="country" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            Country:
         <input type="text" name="country" onChange={this.handleChange}/>
         </label><br></br> */}
        
         </div>
         </div>
         </div>










         <div class="col-sm-6">
         <div class="card">
             <div class="card-body">
               
             <h5 class="card-title">Blood Availablity</h5>
             <div className="form-group row">
                                            <label for="oneg" class="col-sm-4 col-form-label">O-ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="oneg" onChange={this.handleChange} required />
                                            </div>
                                        </div>

         {/* <label>
            ONeg Availability:
         <input type="number" name="oneg" onChange={this.handleChange}/>
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="opos" class="col-sm-4 col-form-label">O+ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="opos" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            OPoz Availability:
         <input type="number" name="opos" onChange={this.handleChange} />
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="aneg" class="col-sm-4 col-form-label">A-ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="aneg" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            ANeg Availability:
         <input type="number" name="aneg" onChange={this.handleChange}/>
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="apos" class="col-sm-4 col-form-label">A+ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="apos" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            APoz Availability:
         <input type="number" name="apos" onChange={this.handleChange}/>
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="bpos" class="col-sm-4 col-form-label">B+ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="bpos" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            BPoz Availability:
         <input type="number" name="bpos" onChange={this.handleChange}/>
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="bneg" class="col-sm-4 col-form-label">B-ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="bneg" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            BNeg Availability:
         <input type="number" name="bneg" onChange={this.handleChange}/>
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="abneg" class="col-sm-4 col-form-label">AB-ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="abneg" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            ABNeg Availability:
         <input type="number" name="abneg" onChange={this.handleChange}/>
         </label><br></br> */}
         <div className="form-group row">
                                            <label for="abpos" class="col-sm-6 col-form-label">AB+ve Available</label>
                                            <div class="col-sm-12">
                                                <input type="number" className="form-control" name="abpos" onChange={this.handleChange} required />
                                            </div>
                                        </div>
         {/* <label>
            ABPoz Availability:
         <input type="number" name="abpos" onChange={this.handleChange}/>
         </label><br></br>
         <label></label> */}
          </div>
         </div>
         </div>
         <div className="form-group col-sm-12">
                                <br />
                                <input type="submit" value="REGISTER" className="form-control btn btn-success" />
                            </div>
         {/* <input type="submit" value="REGISTER" />
         */}
         </div>
        
        </form>  
        </div>
        </div>
          
        );
    }
}

export default AddBloodBank;


