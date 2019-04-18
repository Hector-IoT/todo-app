import React from 'react';
import "../css/TaskEditStyle.css";

class TaskEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task
        };
    }

    handleOnchange(e, key) {

        let temp = { ...this.state.task }
        let type = e.target.type === "checkbox" ? "checked" : "value"
        temp[key] = e.target[type]
        this.setState({ task: temp })
    }

    render() {
        return (
            <div className="container">
                <label >Task Title*</label>
                <input
                    type="text"
                    placeholder="Your task title.."
                    value={this.state.task.title} name={"Title"}
                    onChange={(e) => this.handleOnchange(e, "title")}
                />
                <label >Task Description</label>
                <input type="text" placeholder="Your task description.." value={this.state.task.Description} name={"Description"} onChange={(e) => this.handleOnchange(e, "Description")} />
                <label >Completed</label>
                <input type="checkbox" checked={this.state.task.Completed} onChange={(e) => this.handleOnchange(e, "Completed")} />
                <input onClick={() => {
                    if (this.state.task.title.trim() === '') {
                        alert('The title is mandatory')
                    } else
                        this.props.updateTask(this.state.task)
                }
                } type="button" value="Save" />

                <input onClick={() => {
                    this.props.cancelTask()
                }
                } type="button" value="Cancel" />
            </div>
        );
    }
}

export default TaskEdit;