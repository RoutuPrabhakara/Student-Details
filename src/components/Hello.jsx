import React from 'react'

function Hello() {
        function Hello(){
          document.getElementById("Hi").innerHTML="Hi prabha";
          document.getElementById("Hi").style.color="red" 
          document.getElementById("Hi").style.fontFamily="italic";
          document.getElementById("Hi").style.fontSize="40px";
          document.getElementById("Hi").style.fontWeight="Bold"   
        }
  return (
    <div>
    {
      <>
        <h1 id="Hi">Hello prabhakar</h1>
        <button onClick={Hello}>Submit</button>
      </>
    }
     
     
   
        
      
    </div>
  )
}

export default Hello