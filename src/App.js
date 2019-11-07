import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            isFriendly: false,
            gender: "",
            favColor: "blue",
            age: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactose: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        const {name,value,type,checked } =event.target
        type === "checkbox" ?
        this.setState({
            dietaryRestrictions: {
                [name]:checked
            }
        })
        :
        this.setState({
            [name]: value
        })
    }

    
    handleChange(event) {
        const {name,value,type,checked} =event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value})
    }
     

    render(){
            return (
                <main>
                <form>
                    <input
                    name = "firstName"
                    value= {this.state.firstName}
                    OnChange= {this.handleChange}
                    placholder="firstName"
                    />

                <br/>
                   <input
                    name = "lastName"
                    value= {this.state.lastName}
                    OnChange= {this.handleChange}
                    placholder="lastName"
                    />

<input
                    name = "age"
                    value= {this.state.age}
                    OnChange= {this.handleChange}
                    placholder="age"
                    />
                        <input 
                            type="text" 
                            value={this.state.firstName}
                            name = "firstName"
                            placeholder="first name" 
                            onChange={this.handleChange}
                            />
                        <br/>
                        
                        <input type="text" 
                         value={this.state.lasttName}
                         name = "lastName"
                         placeholder="Last name" 
                         onChange={this.handleChange}/>
                        
                        <textarea value= {"some default value "}
                        onChange={this.handleChange}/>
                    


                        <br/>
                        <label>
                        <input type = "checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange} />
                        Is friendly?
                        </label>
                       
                        <br/>
                        
                        <label>
                        <input 
                            type = "radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange} />
                            Male
                        </label> 
                       
                        <label>
                            <br/>
                        <input 
                            type = "radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange} />
                            FeMale
                        </label>
                       <br/>

                       <label> favorite color </label>

                        <select 
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                        >

                       
                     
                           <option value="blue"> blue</option>
                           <option value = "red"> red</option>
                           <option value = "orange" >orange</option>
                           <option value = "purple"> purple</option>
                           <option></option>
                       </select>

                        <br>
                        </br>

                        <select value={this.state.destination} 
                        name = "destination" 
                        onChange={this.handleChange}
                        >
                           <option value=""> ---please choose a destinatiomn--- </option> 
                        <option value="germany"> germany</option>
                           <option value = "norway"> norway</option>
                           <option value = "north pole" >north pole</option>
                           <option value = "south pole"> south pole</option>
                           <option></option>
                        </select>

                        <br/>
                  
                                <label>
                                    <input
                                    type="checkbox"
                                    name="isVegan"
                                    onChange={this.handleChange}
                                    checked={this.state.dietaryRestrictions.isVegan}>
                                    </input>Vegan
                                </label>
                        <br/>
          
                        <label>
                            <input
                             type="checkbox"
                             name="isKosher"
                             onChange={this.handleChange}
                             checked={this.state.dietaryRestrictions.isKosher}>
                            </input> Kosher
                        </label>
                    <br/>
                   
                        <label>
                            <input
                             type="checkbox"
                             name="isLactose"
                             onChange={this.handleChange}
                             checked={this.state.dietaryRestrictions.isLactose}>
                            </input> Lactose Free
                        </label>

                        <br/>

                        <h1>{this.state.firstName} {this.state.lastName}</h1>

                        <h2> You are a {this.state.gender} </h2>

                        <h2> Your favorite color is {this.state.favColor}</h2>

                        <label>
                            <input 
                            type = "radio"
                                name = "gender"
                                value = "female"
                                    checked={this.state.gender ===" female"}
                                    onChange={this.handleChange}
                                    >
                                    
                            </input>
                        </label>


                        <button> submit</button>
                </form>
               
        
               <h2>Engtered information:</h2>
               <p> Your name : {this.state.firstName}{this.state.lastName} </p>
               <p> Your age : {this.state.age}  </p>
               <p> Your gender : {this.state.gender} </p>
                 <p> Your destination  : {this.state.destination} </p>

                
       </main>
            )
    }
}

export default App

// import TodoItem from "./components/TodoItem"
// import todosData from "./components/todosData"



//accessing API and saveing the data in a state
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }

//     }
//     componentDidMount() {
//         this.setState({loading:true})
//         fetch("https://swapi.co/api/people/1")
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 loading: false,
//                 character:data
//             })

//         })

//     }
//     render() {
//         const text = this.state.loading ? "loading " : this.state.character.name
//         return (
//             <div>
//                <p>{text}</p>
//             </div>
//         )
//     }
// }

// export default App

// //fi9mnshing the to do list chekced
// class App extends React.Component {
//     constructor (){
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)

//     }
//     handleChange(id){
//         this.setState(prevState => {
//         const updatedTodos = prevState.todos.map(todo => {
//             if (todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo
//         })
//         return {
//             todos:  updatedTodos
//         }
//         })
//     }
//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
//         handleChange={this.handleChange}/>)
//         return (
//             <div classname = "todo-list">
//                 {todoItems}

//             </div>
//         )
//     }
// }

// export default App


//updating states
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//            count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
// handleClick() {
//   this.setState(prevState => {
//     return {
//         count: prevState.count + 1

//     }
//   })
   

// }
//     render() {
       
//         return (
//             <div>
//             <h1>{this.state.count}</h1>
//             <button onClick ={this.handleClick}>Change!</button>


           
//                 </div>
//         )
//     }
// }
// export default App

// function App() {
//     return (
//         <div>
//             <h1> Code goes here</h1>
//         </div>
//     )
// }

// class App extends React.Component {
//     constructor(){
//         super()
       
//         this.state = {
//            isLoggedIn: true

//         }
//     }
//     render() {
//         let wordDisplay
//         if (this.state.isLoggedIn ===true){
//             wordDisplay = "in"
//         } else {
//             wordDisplay = "out"
//         }
//         return (
//             <div> 
//                 <h1> You are currently logged {wordDisplay} </h1>
//                 <h1> {this.state.name}</h1>
//                 <h1>{this.state.age} years old</h1>
          
//             </div>y
//         )
//     }
// }


// export default App


// import TodoItem from "./components/TodoItem"
// import todosData from "./components/todosData"

// function App() {
//     const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

//     return (
//         <div className="todo-list">
//             {todoItems}

//         </div>
//     )
// }

// export default App

// import Product from "./components/Product"
// import productsData from "./components/vschoolProducts.js"

// function App() {
//     const productComponents = productsData.map(item => <Product key={item.id} product={item}/> )
    
//     return (
//         <div>
//             {productComponents}
//         </div>
//     )
// }

// export default App
// import Joke from "./components/Joke"
// import jokesData from "./jokesData"


// function App() {
//     const jokeComponents = jokesData.map(joke => <Joke key = {joke.id} question={joke.question} 
//         punchLine={joke.punchLine} />)
    
//         return (
//             <div>
//                 {jokeComponents}
//             </div>
//         )
//     }

// export default App




//     })

//     return (
//         <div>
            
//          <Joke punchLine ="Its hard to explain things to a cleptomanic, they take things literally!"/>
//             <Joke question ="whats the best thing about Switzerland" 
//                 punchLine ="I don't know, but the flas ia a big plus!"/>
//             <Joke question = "did you hear about the mathematicians who;s afraid of negative numbers?" 
//                 punchLine= "He'sll stop at nothing to avoid thme"/>
//             <Joke question= "Hear about the new restaurant called karma?" 
//                 punchLine="There's no menu: You get what you deserrve"/>

//             <Joke question="Did you hear about the claustrophobic asronaut?/" 
//                 punchLine="He jsut needed a little space"/>
           
//         </div>

//     )
// }

// export default App 
//import ContactCard from "./components/ContactCard"


// function App(){
// return (

//         <div className="contacts">

//                 <ContactCard
//                 contact={{name: "Mr> Whisekerson",imgUrl: "http://placekitten.com/300/200",

               
//                 phone:"(212) 300-3000",
//                 email:"mrwhiske@gmail.com"}}
//                 />


//                 <ContactCard
//                 contact={{name: "Mr> Whisekerson",imgUrl: "http://placekitten.com/400/200",

//                 phone:"(212) 300-3000",
//                 email:"mrwhiske@gmail.com"}}
//                 />

//                 <ContactCard
//                 contact={{name: "Mr> Whisekerson",imgUrl: "http://placekitten.com/400/300",

                
//                 phone:"(212) 300-3000",
//                 email:"mrwhiske@gmail.com"}}
//                 />

//                 <ContactCard
//                 contact={{name: "Mr> Whisekerson",imgUrl: "http://placekitten.com/200/100",
//                 phone:"(212) 300-3000",
//                 email:"mrwhiske@gmail.com"}}
//                 />
  
//     </div>
//     )    
// }

// export default App


// <header className="navbar"> This is the header</header>
// <Header/>
//     <MainContent/>
//     <Footer/>







    // <div>
    //     <input type = "checkbox"/>
    //     <p>Place holder </p>

    //     <input type = "checkbox"/>
    //     <p>Place holder </p>
        
    //     <input type = "checkbox"/>
    //     <p>Place holder </p>

    //     <input type = "checkbox"/>
    //     <p>Place holder </p>

    //     <input type = "checkbox"/>
    //     <p>Place holder </p>
    // </div>


// import Header from "./Header"
// import MainContent from "./MainContent"
// import Footer from "./Footer"



// function App(){
//     return (
//         <div>
//             <Header/>
//             <MainContent>aaaa</MainContent>
//             <nav>
//             <h1> hello a third time!</h1>
//         <h1> hello again</h1>
//         <ul>
//             <li>thing1 </li>
//         </ul>
//         </nav>
//         <main>
//             <p> this is where most of </p>
//         </main>
//         <Footer/>
//         </div>
//     )
// }
// export default App



//import Header from "./components/Header"
//import MainContent from "./components/MainContent"
//import Footer from "./components/Footer"
//import './App.css';
//import ToDoItem from "./components/TodoItem"