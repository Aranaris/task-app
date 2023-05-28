import React, {Component} from "react";

class Overview extends Component {
    render() {
        let taskList = this.props.tasks.map((task, i) => 
            <li key={i}>{task}</li>
        )
        return (
            
            <div>
                <h1>{this.props.title}</h1>
                <ol>
                    {taskList}
                </ol>
            </div>
        )
    }
}

export default Overview;