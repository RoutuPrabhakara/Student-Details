import React from 'react'
import "./Style.css"
function Loginpage() {
  return (
    <div>
       <form method='post' action='#'>
        <h1>Customer Form</h1>
        
            <h3>Name</h3>
            <input type="Name" placeholder='First Name' required="required"/>
            <input type="Name" placeholder='Last Name' required="required"/>
            <h3>Phone</h3>
            <input type="number" placeholder='####' required="required"/>
            <input type="Name" placeholder='###' required="required"/>
            <h3>Email</h3>
            <input type="email" placeholder='Enter Email' size='40' required="required"/>
            <h3>Company</h3>
            <input type="text" placeholder='Enter Company Name' size='40' required="required"/>
            <h3>Address</h3>
            <input type="text" placeholder='Enter Address ' size='40' required="required"/><br></br><br></br>
            <input type="text" placeholder='Enter Address 1' size='40' required="required"/><br></br><br></br>
            <input type="text" placeholder='City' required="required"/>
            <input type="text" placeholder='Region' required="required"/><br></br><br></br>
            <input type="number" placeholder='Postal Zip code' required="required"/> 
            <input type="text" placeholder='Romania' required="required"/>
            <h4>Notes(Enter to the Additional information to Company)</h4>
            <textarea rows={5} cols={50}></textarea><br></br><br></br>
            <button bgcolor="Blue">Submit</button>
            
        
       </form>
    </div>
  )
}

export default Loginpage