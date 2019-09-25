import React from 'react';
import TaskItem from '../../components/TaskItem';

class TaskList extends React.Component {
    render() {
        return (
            <div> 
                <table>
                    <thead>
                        <tr>
                            <td>
                                Task Name
                            </td>
                            <td>
                                Weekly Taget
                            </td>
                            <td>
                                Total Target
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
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;