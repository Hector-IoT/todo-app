import React from 'react';
import "../css/TaskPreviewStyle.css";

class TaskPreview extends React.Component {

    render() {

        return (
            <div >
                <p className={"TaskPreviewTitle"}>{this.props.task.title}</p>
                <p className={"TaskPreviewDescription"}>{this.props.task.Description}</p>
                <p className={"TaskPreviewComplete"}>{this.props.task.Completed ? "Completed" : "No Completed"}</p>
            </div>
        );
    }
}

export default TaskPreview;