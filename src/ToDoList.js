import React, {Component} from "react"

export default class ToDoList extends Component{
    
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo, index, array) => (
                            <li key={`${index}-key`}> 
                                <a href=" #" 
                                onClick={(index)=>this.props.onClick(index)} 
                                > 
                                    {todo} 
                                </a>
                            </li> 
                    ))}
                    
                </ul>
            </div>
        )
    }
}





