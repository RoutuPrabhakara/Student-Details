import React from 'react'
import "./Style.css"



function Home() {
  return (
    <div>
      <div id="container">
    <div className="left">
    <img src="https://img.freepik.com/free-vector/post-concept-illustration_114360-534.jpg?w=740&t=st=1705596928~exp=1705597528~hmac=1861413f409e1001bc2d04ee1227151b0afbaec5b1fab2117762b9b239fd83fc" alt="" />

    </div>
    <div className="right">
    <h1>Customer Form</h1>
    
    <h2>Name</h2>
  <input  type='text' placeholder='First' class="He"/>
  <input  type='text' placeholder='Last'/>
   <br></br>
     <h2>Phone</h2>
     <input type='number' placeholder='####'/>
     <h2>Email</h2>
     <input type='email' placeholder='Enter Email' size={50}/>
     <h2>Company</h2>
     <input type='text' placeholder='Comapny' size={50}/>
     <h2>Address</h2>
     <input type='text' placeholder='Street Adress' size={50} class="He"/><br></br><br></br>
     <input type='text' placeholder='Street Adress 1' size={50}/><br></br><br></br>
     <input type='text' placeholder='City' class="He"/>
     <input type='text' placeholder='Region'/>
     <br></br>
     <input  type='text' placeholder='Postal Code' class="He"/>
     <input type='text' placeholder='Romania'/>
     <br></br><br></br>
    <center>
     <button bgcolor="Blue">Submit</button>
     </center>
    </div>
      </div>
      
    </div>
  )
}

export default Home