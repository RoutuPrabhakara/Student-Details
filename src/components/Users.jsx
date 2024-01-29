import react from 'react'
import './Style.css'
function Users({Details}){
    return (
<div>
    {
      Details.map((item,index)=>{
        return(
            <div className='card'>
                <img src={item.profile} alt="" />
                <h1>{item.Name}</h1>
                <h1>{item.Email}</h1>
                <h1>{item.Phone}</h1>
                <h1>{item.Graduationpercentage}</h1>
                <h1>{item.passedoutyear}</h1>
                <h1>{item.skills}</h1>
                <h1>{item.MajorSkills}</h1>
                <h1>{item.OtherSkills}</h1>
               <h1>{item.Hobbies}</h1>
                
            </div>
        )
      })   
    }
       
</div>
    )
}

export default Users;