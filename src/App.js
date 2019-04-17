import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList'
import TaskPreview from './components/TaskPreview'
import TaskEdit from './components/TaskEdit'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: null
    }
  }

  componentDidMount() {
    //call api to get tasks from db, for now we are using hard coded array
    const tasks = [
      { id: '1', title: 'Task 1', Description: 'Description 1', Completed: true },
      { id: '2', title: 'Task 2', Description: 'Description 2', Completed: false },
      { id: '3', title: 'Task 3', Description: 'Description 3', Completed: false }
    ];
    this.setState({
      tasks
    })
  }

  addTask(newtask) {

    let tasks = [...this.state.tasks]
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === newtask.id) {
        alert("Duplicated ID")
        return
      }
    }

    tasks.push(newtask)
    this.setState({
      tasks
    })


  }

  previewTask(index) {
    console.log(index)
    this.setState({
      currentTask: this.state.tasks[index]
    })
  }

  render() {
    // console.log(this.state.tasks)
    return (
      <div className="App">
        <TaskList tasks={this.state.tasks} onClick={(index) => this.previewTask(index)} />
        {this.state.currentTask ? <TaskPreview task={this.state.currentTask} /> : null}

        <TaskEdit />
        <button onClick={() => this.addTask({ id: '4', title: 'Task 4', Description: 'Description 3', Completed: false })} >Insert</button>
      </div>
    );
  }
}

export default App;
