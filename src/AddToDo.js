import React, { Component } from "react"
import './todo.css'
import ToDoList from "./ToDoList";
import FilterList from "./FilterList";

export default class AddToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            formInput: "",
            filterInput: "",
            todos: [
                "Laundry",
                "Finish project review",
            ],
        }
    }

    formHandler(e){
        this.setState({
            formInput: e.target.value
        })
    }

    filterHandler(e){
        this.setState({
            filterInput: e.target.value
        })
    }

    enterAddsToDo(e){
        if (e.keyCode === 13){
            this.addToDo()
            e.preventDefault()
        }
    }

    noEnterKey(e){
        if(e.code===13){
            e.preventDefault()
        }
    }

    addToDo(){
        const todos = this.state.todos.slice()
        const newElement = this.state.formInput
        todos.push(newElement)
        
        this.setState({
            formInput: "",
            todos: todos
        })
    }

    removeToDo(index){
        console.log(index)
        // const todos = this.state.todos.slice()
        // todos.splice(index,1)
        // this.setState({
        //     todos: todos
        // })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <div className='container upper'>
                    <div>
                        <form autoComplete="off" >
                            <input
                                onKeyDown={(e) => this.enterAddsToDo(e)}
                                id="add-todo"
                                value={this.state.formInput}
                                placeholder="Add ToDo here"
                                onChange={(e) => this.formHandler(e)}
                            />
                            <button type="button"
                            onClick={this.addToDo.bind(this)}>Add</button>
                        </form>
                    </div>
                    
                </div>
                <div className='container'>
                    < FilterList 
                    value={this.state.filterInput}
                    onKeyDown={(e) => this.noEnterKey(e)}
                    onChange={(e)=>this.filterHandler(e)}
                    />

                    < ToDoList 
                    todos={this.state.todos} 
                    onClick={(i) => this.removeToDo(i)}
                    />
                </div>
            </div>
        )
    }
}
