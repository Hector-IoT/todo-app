import React from 'react';

class Task extends React.Component {
    handleDelete(event) {
        event.stopPropagation()
        this.props.handleDelete && this.props.handleDelete()
    }

    handleEdit(event) {
        event.stopPropagation()
        this.props.handleEdit && this.props.handleEdit()
    }

    handleCheckboxChange() {

    }

    handleClick(event) {
        event.stopPropagation()
        this.props.onClick()
    }

    render() {
        return (
            <div onClick={(event) => this.handleClick(event)} >
                <h4 >{this.props.task.title}</h4>
                <button onClick={(event) => this.handleEdit(event)}>Edit</button>
                <button onClick={(event) => this.handleDelete(event)}>Delete</button>
                <input type="checkbox" checked={this.props.task.Completed} onChange={this.handleCheckboxChange} />
            </ div>
        );
    }
}

export default Task;

//{id: '1', title: 'Task 1', Description: 'Description 1', Completed: true },