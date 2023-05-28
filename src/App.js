import './App.css';
import React from 'react';
import Overview from './components/Overview';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
        this.setState({
            newTask: event.target.value,
        });
      }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.newTask]),
    });
  }

  render() {
    return (
      <div className="App">
        <Overview title="Task List" tasks={this.state.tasks}>
        </Overview>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="newtask">Add New Task: </label>
            <input type="text" id="newtask" onChange={this.handleChange}></input>
            <input type="submit" value="Submit"></input>
          </form>
      </div>
    );
  }
}
  

export default App;
