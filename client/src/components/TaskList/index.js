import React from 'react';

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
                        <tr>
                            <td className='taskName'>
                                {task.taskName}
                            </td>
                            <td className='weeklyTarget'>
                                {task.weeklyTarget}
                            </td>
                            <td className='totalTarget'>
                                {task.totalTarget}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;