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
      currentPreviewTaskIndex: -1,
      currentEditTaskIndex: -1
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

  handleEdit(index) {
    this.setState({
      currentEditTaskIndex: index
    })
  }

  handleDelete(index) {

    let tasks = [...this.state.tasks]
    tasks.splice(index, 1)
    this.setState({
      tasks,
      currentPreviewTaskIndex: -1,
      currentEditTaskIndex: -1
    })
  }

  updateTask(task, index) {
    let tasks = [...this.state.tasks]
    tasks[index] = task

    this.setState({
      tasks,
      currentPreviewTaskIndex: -1,
      currentEditTaskIndex: -1
    })
  }

  previewTask(index) {
    this.setState({
      currentPreviewTaskIndex: index
    })
  }

  render() {
    return (
      <div className="App">
        <TaskList
          tasks={this.state.tasks}
          onClick={(index) => this.previewTask(index)}
          handleEdit={(index) => this.handleEdit(index)}
          handleDelete={(index) => this.handleDelete(index)}
        />

        {this.state.currentPreviewTaskIndex > -1 ? <TaskPreview task={this.state.tasks[this.state.currentPreviewTaskIndex]} /> : null}
        <button onClick={() => this.addTask({ id: '4', title: 'Task 4', Description: 'Description 3', Completed: false })} >Insert</button>

        {this.state.currentEditTaskIndex > -1 ?
          <TaskEdit
            key={Math.random()}
            task={this.state.tasks[this.state.currentEditTaskIndex]}
            updateTask={(task) => this.updateTask(task, this.state.currentEditTaskIndex)}
          />
          : null}

      </div>
    );
  }
}

export default App;
