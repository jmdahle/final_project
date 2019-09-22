import React from 'react';
import './style.css';

class Task extends React.Component {
    render() {
        return (
            <tr className='taskItem'>
                <td className='taskIncludeYN'>
                    {this.props.taskIncludeYN === 'true' ? 
                        (<i className="fa fa-minus-circle" aria-hidden="true"></i>) : 
                        (<i className="fa fa-plus-circle" aria-hidden="true"></i>)
                    }                
                </td>
                <td className='taskName'>
                    {this.props.taskName}
                </td>
                <td className='weeklyTarget'>
                    {this.props.weeklyTarget}
                </td>
                <td className='totalTarget'>
                    {this.props.totalTarget}
                </td>
            </tr>
        );
    }
}

export default Task;