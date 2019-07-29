import React, {Component} from "react"

export default class FilterList extends Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         filterInput: ""
    //     }
    // }
    
    // 
    // filterText(e){
    //     this.setState({
    //         formInput: e.target.value
    //     })
    // }
    
    render(){
        return(
            <div>
                <input
                    onKeyDown={(e) => this.props.onKeyDown(e)}
                    id="filter-todos"
                    value={this.props.value}
                    placeholder="Search ToDos"
                    onChange={(e) => this.props.onChange(e)}
                    />
            </div>
        )
    }
}