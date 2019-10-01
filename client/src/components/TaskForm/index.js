import React from 'react';
import './style.css';

class Task extends React.Component {
    render() {
        return (
            <form>
                <div className='form-group'>
                    <label htmlFor='goalId'>Select Goal</label>
                    <select className='form-control' id='goalId' name='goalId' onChange={this.props.handleOnChange} value={this.props.goalId}>
                        <option hidden selected>-- Select a Goal --</option>
                    {this.props.goals.map( goal => (
                        <option key={goal._id} value={goal._id}>
                            {goal.goalName}
                        </option>
                    ))}
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td className="taskListTd">
                                Task Name
                            </td>
                            <td className="taskListTd streakTarget">
                                Streak Target (# times consecutively)
                            </td>
                            <td className="taskListTd totalTarget">
                                Total Target (# times in total)
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='taskName'>
                                <div className='form-group'>
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Task Name'
                                        value={this.props.taskName}
                                        name='taskName'
                                        id='taskName' 
                                        onChange={this.props.handleOnChange}
                                    />
                                </div>
                            </td>
                            <td className='streakTarget'>
                                <div className='form-group'>
                                <input 
                                        type='number' 
                                        className='form-control' 
                                        placeholder='# Consecutive'
                                        value={this.props.streakTarget}
                                        name='streakTarget'
                                        id='streakTarget' 
                                        onChange={this.props.handleOnChange}
                                    />
                                </div>
                            </td>
                            <td className='totalTarget'>
                                <div className='form-group'>
                                    <input 
                                        type='number' 
                                        className='form-control' 
                                        placeholder='# Total'
                                        value={this.props.totalTarget}
                                        name='totalTarget'
                                        id='totalTarget' 
                                        onChange={this.props.handleOnChange}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan='3'>
                                <button 
                                    type='submit' 
                                    className='btn btn-style'
                                    onClick={this.props.handleTaskFormSubmit}
                                >Add Task!
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default Task;