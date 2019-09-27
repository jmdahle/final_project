import React from 'react';
import './style.css';
import TaskItem from '../../components/TaskItem';

class TaskList extends React.Component {
    render() {
        return (
            <div> 
                <table>
                    <thead>
                        <tr className='task-list-head'>
                            <td>
                                <br/>Task Name
                            </td>
                            <td>
                                Streak<br/>Taget
                            </td>
                            <td>
                                Total<br/>Target
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.tasks.map( task => (
                        <TaskItem 
                            taskName={task.taskName}
                            streakTarget={task.streakTarget}
                            totalTarget={task.totalTarget}
                            id={task._id}
                            key={task._id}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;