import React, { Component } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskPreview from "./components/TaskPreview";
import TaskEdit from "./components/TaskEdit";
import "./css/TaskEditStyle.css";
import "./css/TaskPreviewStyle.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskToCreateOrModify: null,
      taskToPreview: null,
    };
  }

  componentDidMount() {

    const tasks = [
      {
        title: "Task 1",
        Description: "Description 1",
        Completed: true
      },
      {
        title: "Task 2",
        Description: "Description 2",
        Completed: false
      },
      {
        title: "Task 3",
        Description: "Description 3",
        Completed: false
      }
    ];
    this.setState({
      tasks
    });
  }

  createTask() {

    const newtask = {
      title: "",
      Description: "",
      Completed: false
    }

    this.setState({
      taskToCreateOrModify: newtask,
      currentEditTaskIndex: this.state.tasks.length + 1
    });

  }

  updateOrCreateTask(task) {
    if (this.state.currentEditTaskIndex < this.state.tasks.length) {
      this.updateTask(task, this.state.currentEditTaskIndex)
    } else {
      this.insertTask(task)
    }

    this.cancelTask();
  }

  handleEdit(index) {
    const tasks = [...this.state.tasks];
    this.setState({
      currentEditTaskIndex: index,
      taskToCreateOrModify: tasks[index]
    });
  }

  handleDelete(index) {
    let tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  }
  handleCheckboxChange(index) {
    let tasks = [...this.state.tasks];
    tasks[index].Completed = !tasks[index].Completed;
    this.setState({
      tasks,
    });
  }

  updateTask(task, index) {
    let tasks = [...this.state.tasks];
    tasks[index] = task;

    this.setState({
      tasks,
    });
  }

  cancelTask() {
    this.setState({
      taskToCreateOrModify: null,
    });
  }

  insertTask(task) {
    let tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({
      tasks,
    });
  }

  previewTask(index) {
    const tasks = [...this.state.tasks];

    this.setState({
      taskToPreview: tasks[index]
    });
  }

  render() {

    const taskList = <TaskList
      tasks={this.state.tasks}
      onClick={index => this.previewTask(index)}
      handleEdit={index => this.handleEdit(index)}
      handleDelete={index => this.handleDelete(index)}
      handleCheckboxChange={index => this.handleCheckboxChange(index)}
    />

    return (
      <div className="App">
        <h2>Task List</h2>

        {taskList}
        <div
          className={"AddTaskButton"}
          onClick={() => this.createTask()}
        >
          <h2>+</h2>
        </div>

        {this.state.taskToPreview != null ? (
          <TaskPreview
            task={this.state.taskToPreview}
          />
        ) : null}

        {this.state.taskToCreateOrModify != null ? (
          <div className="TaskEdit">
            <TaskEdit
              key={Math.random()}
              task={this.state.taskToCreateOrModify}
              updateTask={(task) =>
                this.updateOrCreateTask(task)
              }
              cancelTask={() => this.cancelTask()}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
