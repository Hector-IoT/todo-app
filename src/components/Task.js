import React from 'react';

class Task extends React.Component {


    render() {
        return (
            <div onClick={this.props.onClick}>
                <h4>{this.props.task.title}</h4>
            </div>
        );
    }
}

export default Task;

//{ id: '1', title: 'Task 1', Description: 'Description 1', Completed: true },