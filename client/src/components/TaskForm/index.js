import React from 'react';
import './style.css';

class Task extends React.Component {
    render() {
        return (
            <form>
                <div class='form-group'>
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
                            <td>
                                Task Name
                            </td>
                            <td>
                                Weekly Taget (# times per week)
                            </td>
                            <td>
                                Total Target (# times for completion)
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
                            <td className='weeklyTarget'>
                                <div class='form-group'>
                                    <select className='form-control' id='weeklyTarget' name='weeklyTarget' onChange={this.props.handleOnChange} value={this.props.weeklyTarget}>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                    </select>
                                </div>
                            </td>
                            <td className='totalTarget'>
                                <div className='form-group'>
                                    <input 
                                        type='number' 
                                        className='form-control' 
                                        placeholder='# for Completion'
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