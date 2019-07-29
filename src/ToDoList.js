import React, {Component} from "react"

export default class ToDoList extends Component{
    
    render(){
        if(this.props.filterValue){
            const filterList = this.props.todos.filter((todo)=> {
                return todo.toLowerCase().startsWith(this.props.filterValue.toLowerCase())
            })
            return(
                <div>
                    <ul>
                        {filterList.map((todo, index) => (
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
        } else{
            return(
                <div>
                    <ul>
                        {this.props.todos.map((todo, index) => (
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
}





