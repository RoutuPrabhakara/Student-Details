import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Create from './components/Create'
import './App.css'
import Users from './components/Users'
import Website from './components/Website'
function App(){
   const Student = [
    {
      Name:"Sandip",
      Email:"sandip@123Gamil.com",
      Phone:857443848,
      Graduationpercentage:"98%",
      passedoutyear:2020,
      skills:"python",
      MajorSkills:"Python full stock",
      OtherSkills:"Reading",
      Hobbies:"Suport Team ",
      Support:"Self",
      Experience:"Cloud Developer",
      profile:"https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg",
      
    },
    {
      Name:"Hari",
      Email:"harip@123Gamil.com",
      Phone:857893467,
      Graduationpercentage:"78%",
      passedoutyear:2021,
      skills:"java",
      MajorSkills:"Java full stock",
      OtherSkills:"Singing",
      Hobbies:"Helping Nature ",
      Support:"Help",
      Experience:".Net Developer",
      profile:"https://th.bing.com/th/id/OIP.eteuNjb-uZCqYoeT3BFkvAHaE8?pid=ImgDet&w=474&h=316&rs=1"
      
    },
    {
      Name:"pavan",
      Email:"pavan@123Gamil.com",
      Phone:1234893467,
      Graduationpercentage:"88%",
      passedoutyear:2022,
      skills:"frontend",
      MajorSkills:"React full stock",
      OtherSkills:"cricket",
      Hobbies:"Whatching Movies ",
      Support:"Friends support",
      Experience:"Frontend Developer",
      profile:"https://th.bing.com/th/id/OIP.IoUmyjrf4VaXudyiVqv2WwHaII?pid=ImgDet&w=474&h=520&rs=1",
      
    }
   ]
  return (
    <div>
<Users Details={Student}/>
{/* <Website/> */}
{/* dddd */}

    </div>
  )
}


export default App