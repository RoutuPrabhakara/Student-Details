import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login page</h1>
       <div id="container">
       <div class="left">
            <img src="https://img.freepik.com/premium-vector/login-ui-ux-design-concept-illustration_78200-431.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais" alt="" />

        </div>
        <div class="right">
        <form>
            <center>
              
            <input type='email' placeholder='Enater Email' class="Hi"/><br></br>
            <input type='password' placeholder='Enater Pasword'/><br></br><br></br>
            <button class="Hello">Submit</button>

            </center>
        </form>
        </div>
       </div>
    </div>
  )
}

export default Login