import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//import ContactCard from "./components/ContactCard"


ReactDOM.render(<App/>,document.getElementById("root"))
// function App2(){
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay

//     if (hours <12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17){
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }

//     const styles =  {
//         color: "#FF8C00" , 
//         backgroundColor:"red",
        
//         fontSize: "200px"
//     } 
       
    
//         return (
//             <h1 style = {styles }> Good {timeOfDay}! </h1>
//         )
    
// }
// function App2(){
// // const firstName  ="Bob"
// // const lastName = "ziroll"

// const date = new Date()
// return (
//     <h1> It is currently about {date.getHours() % 12} o'clock </h1>
//     //<h1> Hello {`${firstName} ${lastName}`}! </h1>
//     )
// }


 //ReactDOM.render(<App2/>,document.getElementById("root"))

