import React from "react";
import "../css/TaskStyle.css";

class Task extends React.Component {
  handleDelete(event) {
    this.props.handleDelete && this.props.handleDelete();
  }

  handleEdit(event) {
    this.props.handleEdit && this.props.handleEdit();
  }

  handleCheckboxChange() {
    this.props.handleCheckboxChange && this.props.handleCheckboxChange();
  }

  handleClick(event) {
    this.props.onClick();
  }

  render() {
    let taskStyle = "Task" + (this.props.task.Completed ? " Completed" : "");

    return (
      <div className={taskStyle}>

        <h4 className={"title"} onClick={event => this.handleClick(event)}>{this.props.task.title}</h4>

        <div className={"actions"}>
          <input
            className={"CheckBox"}
            type="checkbox"
            checked={this.props.task.Completed}
            onChange={event => this.handleCheckboxChange(event)}
          />
          <button className={"ButtonEdit"} onClick={event => this.handleEdit(event)}>Edit</button>
          <button className={"ButtonDelete"} onClick={event => {
            var r = window.confirm("Are you sure?");
            if (r === true) {
              this.handleDelete(event);
            }
          }
          }>Delete</button>
        </div>

      </div>
    );
  }
}

export default Task;