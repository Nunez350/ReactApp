

 import React, {Component} from "react"
// import TodoItem from "./components/TodoItem"
// import todosData from "./components/todosData"


class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }

    }
    componentDidMount() {
        this.setState({loading:true})
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character:data
            })

        })

    }
    render() {
        const text = this.state.loading ? "loading " : this.state.character.name
        return (
            <div>
               <p>{text}</p>
            </div>
        )
    }
}

export default App

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