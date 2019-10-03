import React from 'react';
import './style.css';

const TaskItem = ({taskName, streakTarget, totalTarget, id}) =>{
    return(
        <tr id={id} key={id} className="taskItemRow">
            <td className='taskName'>
                {taskName}
            </td>
            <td className='streakTarget'>
                {streakTarget}
            </td>
            <td className='totalTarget'>
                {totalTarget}
            </td>
        </tr>
    )
}

export default TaskItem;