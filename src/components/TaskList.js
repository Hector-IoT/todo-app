import React from 'react';
import Task from './Task'
import "../css/TaskListStyle.css";

class TaskList extends React.Component {

    render() {

        const list = this.props.tasks.map((task, index) => {

            return (
                <Task
                    key={Math.random()}
                    task={task}
                    onClick={() => this.props.onClick(index)}
                    handleEdit={() => this.props.handleEdit(index)}
                    handleDelete={() => this.props.handleDelete(index)}
                    handleCheckboxChange={() => this.props.handleCheckboxChange(index)}
                />
            )
        })

        return (
            <div className={"TaskList"}>
                {list}
            </div>
        );
    }
}

export default TaskList;