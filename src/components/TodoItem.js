import React from  "react"

function TodoItem(props) {

    const completeStyle = {
        fontStyle: "italic",
        color: "#green",
        textdecveortion:  "line-through"

    }
    return (
        <div className ="todo-item">
            <input 
            type="checkbox"
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
            <p> {props.item.text}</p>
        </div>
    )
}

export default TodoItem
// import React from "react"
// import '../style.css';
// function ToDoItem(props){
//     return (
//         <div className="todo-item">

//         <input type="checkbox" checked={props.item.completed}/>
//         <p> {props.item.text}</p>
//         </div>
//     )
// }

// export default ToDoItem



