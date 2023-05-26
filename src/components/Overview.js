import React, {Component} from "react";

class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ['test1','test2','test3'],
        }

        this.addTask  = this.addTask.bind(this);
    }

    addTask(newTask) {
        this.setState({
            tasks: this.state.tasks.push(newTask),
        })
    }

    render() {
        let taskList = this.state.tasks.map((task) => 
            <li>{task}</li>
        )
        return (
            <div>
                <ol>
                    {taskList}
                </ol>
            </div>
        )
    }
}

export default Overview;