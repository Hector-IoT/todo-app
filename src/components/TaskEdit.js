import React from 'react';

class TaskList extends React.Component {
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
            <div>
                <input type="text" value={this.state.task.title} name={"Title"} onChange={(e) => this.handleOnchange(e, "title")} />
                <input type="text" value={this.state.task.Description} name={"Description"} onChange={(e) => this.handleOnchange(e, "Description")} />
                <input type="checkbox" checked={this.state.task.Completed} onChange={(e) => this.handleOnchange(e, "Completed")} />
                <button onClick={() => this.props.updateTask(this.state.task)}>Save</button>
            </div>
        );
    }
}

export default TaskList;