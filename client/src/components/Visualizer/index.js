import React from 'react';
import './style.css'

class Visualizer extends React.Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <table>
                    <VizHeader
                        visualizerDates={this.props.visualizerDates}
                        changeVisualizerDates={this.props.changeVisualizerDates}
                    />
                    {this.props.visualizerData.map( userGoal => (
                        <VizGoal
                            key={userGoal.userGoalId}
                            goalData={userGoal}
                        />
                    ))}
                </table>

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
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </td>
                    {this.props.visualizerDates.map( date => (
                            <td className='date-heading' key={date}>{date}</td>
                        )
                    )}
                    <td onClick={ ()=> this.props.changeVisualizerDates(1) }>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
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
                        key={task._id}
                        taskData={task}
                    />
                ))}
            </tbody>
        );
    }
}

class VizTask extends React.Component {
    render() {
        return(
                    <tr key={this.props.taskData.taskId}>
                        <td>{this.props.taskData.taskName}</td>
                        <td>&nbsp;</td>
                        {this.props.taskData.userTimeline.map( date => (
                            <VizDate
                                key={date + '_' + this.props.taskData.taskId}
                                dateData={date}
                            />
                        ))}
                        <td>&nbsp;</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
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
                {this.props.dateData.taskCompletedYN ? '[X]' : '[ ]'}
            </td>
        )
    }
}

export default Visualizer;