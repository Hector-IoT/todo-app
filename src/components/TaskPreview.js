import React from 'react';

class TaskPreviw extends React.Component {


    render() {
        return (
            <div>
                {this.props.task.title}
                {this.props.task.Description}
                {this.props.task.Completed.toString()}
            </div>
        );
    }
}

export default TaskPreviw;

//{ id: '1', title: 'Task 1', Description: 'Description 1', Completed: true },