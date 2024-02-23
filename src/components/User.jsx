import React from 'react'
import './user.css'
import axios from 'axios'
import { useState } from 'react'

function User() {
    const [formname, setFormName] = useState()
    const [formemail, setFormEmail] = useState()


    const [box, setBox] = useState({
        "name":"",
        "email":""

    })
    const uploadData = async() =>{
        setBox({
            name:formname,
            email:formemail
        })
      try {
        const responce = await axios.post('https://localhost:3200/api/user/create/', box)
        if(responce.status == 200){
            alert("created")
        }
        else{
            alert(responce)
        }
      } catch (error) {
        alert('error')
      }
    }
  return (
    <div className='container'>
        <div className="card">
            <h3>Create Account</h3>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Can i know your name?'  onChange={(e)=>setFormName(e.target.value)}/>

            <label htmlFor="">Email Address</label>
            <input type="email" placeholder='Enter email Address' onChange={(e)=>setFormEmail(e.target.value)} />
            <button className="register-btn" onClick={uploadData}>Create Account</button>
        </div>

    </div>
  )
}

export default User