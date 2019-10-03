import React from 'react';
import Table from 'react-bootstrap/Table';
import './style.css'

class Visualizer extends React.Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <Table responsive="lg">
                    <VizHeader
                        key={'viz-header'}
                        visualizerDates={this.props.visualizerDates}
                        changeVisualizerDates={this.props.changeVisualizerDates}
                    />
                    {this.props.visualizerData.map( userGoal => (
                        <VizGoal
                            key={userGoal.userGoalId}
                            goalData={userGoal}
                            handleCompleteTask={this.props.handleCompleteTask}
                            handleIncompleteTask={this.props.handleIncompleteTask}
                        />
                    ))}
                </Table>

            </div>
        );
    }
}

class VizHeader extends React.Component {
    render() {
        return(
            <thead>
                <tr>
                    <td>&nbsp;</td>
                    <td onClick={ () => this.props.changeVisualizerDates(-1) }>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </td>
                    {this.props.visualizerDates.map( date => (
                            <td className='date-heading' key={date}>{date}</td>
                        )
                    )}
                    <td onClick={ ()=> this.props.changeVisualizerDates(1) }>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </td>
                    <td>CURR</td>
                    <td>LONG</td>
                    <td>TOTAL</td>
                </tr>
            </thead>
        )
    }
}

class VizGoal extends React.Component {
    render() {
        return(
            <tbody>
                <tr className='goal-row'>
                    <td colSpan='13'>
                        {this.props.goalData.goalName} | {this.props.goalData.goalPercent}% Complete
                    </td>
                </tr>
                {this.props.goalData.userTasks.map( task => (
                    <VizTask
                        currentStreak={task.taskCurrentStreak}
                        // longStreak={task.taskLongStreak}
                        // totalCompleted={task.taskTotalCompleted}
                        key={task._id}
                        taskData={task}
                        userGoalId={this.props.goalData.userGoalId}
                        handleCompleteTask={this.props.handleCompleteTask}
                        handleIncompleteTask={this.props.handleIncompleteTask}
                    />
                ))}
            </tbody>
        );
    }
}

class VizTask extends React.Component {
    render() {
        return(
                    <tr 
                        key={this.props.key}
                        className={this.props.taskData.taskCompleteYN ? 'task-goal-met' : 'task-goal-unmet'}                        
                    >
                        <td className="taskName">
                            {this.props.taskData.taskCompleteYN ? <i class="fa fa-check" aria-hidden="true">&nbsp;</i> : <span>&nbsp;</span>}
                            {this.props.taskData.taskName}
                        </td>
                        <td>&nbsp;</td>
                        {this.props.taskData.userTimeline.map( date => (
                            <VizDate
                                key={date.timelineDate + '_' + this.props.taskData.taskId}
                                id={date.timelineDate + '_' + this.props.taskData.taskId}
                                taskId={this.props.taskData.taskId}
                                userGoalId={this.props.userGoalId}
                                dateData={date}
                                handleCompleteTask={this.props.handleCompleteTask}
                                handleIncompleteTask={this.props.handleIncompleteTask}
                            />
                        ))}
                        <td>&nbsp;</td>
                        {/* <td>{this.props.taskData.taskCurrentStreak}</td>  */}
                        <td>{this.props.currentStreak}</td>                   
                        <td>{this.props.taskData.taskLongStreak}/{this.props.taskData.taskStreakTarget}</td>
                        <td>{this.props.taskData.taskTotalCompleted}/{this.props.taskData.taskTotalTarget}</td>
                    </tr>
        );
    }
}

class VizDate extends React.Component {
    render() {
        return(
            <td className='date-item'>
                {/* {this.props.dateData.timelineDate}
                <br></br> */}
                {this.props.dateData.taskCompletedYN ? (
                    <div 
                        className='task-complete'
                        onClick={() => this.props.handleIncompleteTask(this.props.dateData.timelineId)}
                    >
                        &nbsp;
                    </div>
                ): (
                    <div 
                        className='task-incomplete'
                        onClick={() => this.props.handleCompleteTask(this.props.taskId, this.props.userGoalId, this.props.dateData.timelineDate)}
                    >
                        &nbsp;
                    </div>
                )}
            </td>
        )
    }
}

export default Visualizer;