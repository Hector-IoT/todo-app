import React from 'react';
import "../css/TaskPreviewStyle.css";

class TaskPreview extends React.Component {

    render() {

        return (
            <div className="container" >
                <h1 className={"TaskPreviewTitle"}>{this.props.task.title}</h1>
                <p className={"TaskPreviewDescription"}>{this.props.task.Description}</p>
                <h4 className={"TaskPreviewComplete"}>{this.props.task.Completed ? "Task Completed" : "Task no completed"}</h4>
                <input onClick={() => {
                    this.props.closePreview()
                }
                } type="button" value="Close" />
            </div>
        );
    }
}

export default TaskPreview;