import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './PatientRegister.css';
import 'bootstrap/dist/js/bootstrap'
let url="http://localhost:8080/addPatient";
class PatientRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newpatientList:{
                "patient_name": "",
                "dob": "",
                "blood_group": "O+",
                "phone_number": 0,
                "email": "",
                "line": "",
                "city": "",
                "state": "",
                "country": "",
                "pincode":0
            }
        }
    }
    
    handleChange = event =>{
       
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log("Hi");
        
        let name = event.target.name;
        let value = event.target.value;
        // console.log(value)
         
          this.setState(prevState =>( {newpatientList:{...prevState.newpatientList,[name]:value}}));
      }

      handleSubmit =(event) =>
      {
          event.preventDefault();
        //   console.log(this.state.newpatientList.blood_group)
        //   console.log(this.state.newpatientList.dob);
          fetch(url,{"method":"POST",
          "body":JSON.stringify(this.state.newpatientList),
           "headers":{
               "Content-Type":"application/json"
           }
}).then(resp=>{ console.log("Response");console.log(resp.status)});
      }

    render() {
        return (
            <div className="card">
                
            <div className="card-body">  
            
            <form className="container" onSubmit={this.handleSubmit}>
            <h1>Patient Registeration</h1>     
            <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Patient Details</h5>
                  <div className="form-group row">
                  <label for="patientName" class="col-sm-3 col-form-label">Patient Name</label>
                  <div class="col-sm-12">
                  <input type="text" className="form-control" name="patient_name"  onChange={this.handleChange} required/>
                  </div>
                  </div>

                  <div className="form-group row">
                                            <label for="password" class="col-sm-3 col-form-label">Password</label>
                                            <div class="col-sm-12">
                                                <input type="password" name='password' className="form-control" onChange={this.handleChange} required />
                                            </div>
                 </div>
                  
                  <div className="form-group row">
                  <label for="dob" class="col-sm-3 col-form-label">Date Of Birth</label>
                  <div class="col-sm-12">
                  <input type="date" className="form-control" name="dob"  onChange={this.handleChange} required/>
                  </div>
                  </div>
               

                 
                  <div className="form-group row">
                  <label for="blood_group" class="col-sm-3 col-form-label">Blood Group</label>
                  <div class="col-sm-12">
                  <select class="form-control" id="id" name="blood_group" onChange={this.handleChange}>
                         <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        </select>
                  </div>
                  </div>                  
                  
                  
                  {/* <div className="form-group row">
                  <label for="effectiveDate" class="col-sm-3 col-form-label">Effective Date</label>
                  <div class="col-sm-12">
                  <input type="date" name='effectiveDate' className="form-control"  onChange={this.handleChange} required/>
                  </div>
                 </div> */}


                 <div className="form-group row">
                  <label for="effectiveDate" class="col-sm-3 col-form-label"><h3>Note</h3></label>
                  <div class="col-sm-12">
                  <div className ="card">
                  <div className="card-body">       
                  <div><h5>Patient Details are maintained at high confidenciality</h5></div>
                  </div>
                  </div>
                  </div>
                 </div>
                    
                
                </div>
              </div>
            </div>




        <div class="col-sm-6">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">Contact Details</h5>
        
        <div className="form-group row">
                  <label for="phone_number" class="col-sm-4 col-form-label">Phone Number   </label>
                  <div class="col-sm-12">
                  <input type="number" name='phone_number' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div>

        <div className="form-group row">
                  <label for="email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-12">
                  <input type="email" name='email' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div>
        
        <div className="form-group row">
                  <label for="line" class="col-sm-3 col-form-label">Full Address</label>
                  <div class="col-sm-12">
                  <input type="text" name='line' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div>

        <br/>
        <br/>



        <div className="form-group row">


                  <label for="city" class="col-sm-2 col-form-label">City</label>
                  
                  <div class="col-sm-4">
                  <input type="text" name='city' className="form-control"  onChange={this.handleChange} required/><br/>
                  </div>
                  <label for="state" class="col-sm-2 col-form-label">State</label>
                  <div class="col-sm-4">
                  <input type="text" name='state' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div>

        <div className="form-group row">
                  <label for="line" class="col-sm-3 col-form-label">Country</label>
                  <div class="col-sm-12">
                  <input type="text" name='country' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div>
        
        <div className="form-group row">
                  <label for="line" class="col-sm-3 col-form-label">pincode</label>
                  <div class="col-sm-12">
                  <input type="number" name='pincode' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div>



       
{/*         
        <div className="form-group row">


                  <label for="country" class="col-sm-3 col-form-label">country</label>
                  
                  <div class="col-sm-3">
                  <input type="text" name='city' className="form-control"  onChange={this.handleChange} required/><br/>
                  </div>
                  <label for="pincode" class="col-sm-2 col-form-label">pincode</label>
                  <div class="col-sm-4">
                  <input type="number" name='pincode' className="form-control"  onChange={this.handleChange} required/>
                  </div>
        </div> */}
       

     
       

        </div>
        </div>
       </div>
 
       
       
       <div className="form-group col-sm-12">
           <br/>
        <input type="submit" value="SUBMIT" className="form-control btn btn-success" />
        </div>

            
{/*                
                    <div className="card col-sm-6">
                     <br/>   
                    <h5>Patient Contact Details</h5>  
                    <div className="col-sm-6 mob-con-border">
                    <div className="form-group row">
                  <label for="dob" class="col-sm-3 col-form-label">Date Of Birth</label>
                  <div class="col-sm-12">
                  <input type="date" className="form-control" name="dob"  onChange={this.handleChange} required/>
                  </div>
                  </div>
                    </div>
                    </div>
                     

                    <div className="col-sm-6 mob-con-border">
                    <div className="form-group row">
                    <div className="card-body">
                    <label for="bloodGroup" class="col-sm-12 col form-label">Blood Group</label>
                    
                    




                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="phoneNumber" class="col-sm-12 col form-label">Phone Number</label>
                       
                        <input type="number" name='phoneNumber' className="form-control"  onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    <h4 name="address">Address Details</h4>  
                    <div className="card col-sm-12"> */}
                    {/* <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <label for="address" name="address" class="col-sm-12 col form-label">Address</label><br/>
                        </div>
                    </div> */}
                    {/* <div className="col-sm-6 mob-con-border"> */}
                        {/* <div className="form-group row">
                        <div className="card-body">
                        <label for="line" class="col-sm-12 col form-label">Line</label>
                       
                        <input type="text" name='line'className="form-control"   onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="state" class="col-sm-12 col form-label">State</label>
                      
                        <input type="text" name='state' className="form-control"  onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="city" class="col-sm-12 col form-label">City</label>
                       
                        <input type="text" name='city' className="form-control"  onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="country" class="col-sm-12 col form-label">Country</label>
                       
                        <input type="text" name='country' className="form-control"  onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="pincode" class="col-sm-12 col form-label">Pin Code</label>
                       
                        <input type="number" name='pincode' className="form-control"  onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="email" class="col-sm-12 col form-label">Email</label>
                        
                        <input type="email" name='email'className="form-control"   onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mob-con-border">
                        <div className="form-group row">
                        <div className="card-body">
                        <label for="effectiveDate" class="col-sm-12 col form-label">Effective Date</label>
                       
                        <input type="date" name='effectiveDate' className="form-control"  onChange={this.handleChange} required/><br/>
                        </div>
                        </div>
                    </div>

                    <div className="card-body">
                    <input type="submit" value="SUBMIT" className="form-control" />
                    </div> */}
                   
                    </div>
                    </form>
                    </div>        
                    </div> 
                    
                    
//                     {/* <label htmlFor="">State</label>
//                     <input type="text" name='state'  onChange={this.handleChange} required/><br/> */}
//                     {/* <label htmlFor="">City</label>
//                     <input type="text" name='city'  onChange={this.handleChange} required/><br/> */}
//                     {/* <label htmlFor="">Country</label>
//                     <input type="text" name='country'  onChange={this.handleChange} required/><br/> */}
//                     {/* <label htmlFor="">Pin Code</label>
//                     <input type="number" name='pincode'  onChange={this.handleChange} required/><br/> */}
//                     {/* <label htmlFor="">Donor Status</label><br></br> */}
//                     {/* <input id="donor_status" name="donor_availablity" checked type="radio" onChange={this.handleChange} required/><br/> */}
//                     {/* <label htmlFor="">Donor Status</label>  Available &nbsp; */}
//                     {/* <input id="donor_status" name="donor_availablity"  type="radio" defaultChecked/>Available<br/>
//                     <input id="donor_status_1" name="donor_availablity"  type="radio"/> Not Available<br/><br/> */}
//                     {/* <label htmlFor="">Email</label>
//                     <input type="email" name='email'  onChange={this.handleChange} required /><br/> */}
//                     {/* <label htmlFor="">Eff Date</label>
//                     <input type="date" name="effectiveDate" onChange={this.handleChange} required/><br/>
//                     */}
//                     {/* <input type="submit" value="POST"/> */}
//                     {/* <div class="form-group row"> */}
//            {/* <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//         <div class="col-sm-10">
//       <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
//     </div>
//   </div>

//   <div class="row">
//   <div class="col-sm-6">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Special title treatment</h5>
//         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
//   </div> */}
                    
           
         
     
    
        );
    }
}

export default PatientRegister;