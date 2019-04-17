import React from 'react';
import Task from './Task'

class TaskList extends React.Component {


    render() {

        const list = this.props.tasks.map((task, index) => {

            return (
                <Task key={index + task.id} task={task} onClick={() => this.props.onClick(index)} />
            )
        })

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TaskList;