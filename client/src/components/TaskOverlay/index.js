import React from 'react';
import './style.css';

import TaskList from '../../components/TaskList';

class TaskOverlay extends React.Component {
    render() {
        if (this.props.showTaskOverlay) {
            return (
                <div className='task-overlay'>
                    <h4>Goal: {this.props.selectedGoal.goalName}</h4>
                    <TaskList
                        key='TaskList'
                        tasks={this.props.tasks}
                    />
                    <hr/>
                    <button 
                        type='submit' 
                        className='btn btn-style'
                        onClick={this.props.handleAddGoalFormSubmit}
                    >Let's Go!
                    </button>
                    &nbsp;
                    <button 
                        type='submit' 
                        className='btn btn-style'
                        onClick={() => this.props.taskOverlayClose()}
                    >Close
                    </button>
                </div>
            );
        } else {
            return (
                <span> </span> 
            );
        } 
    }
}

export default TaskOverlay;