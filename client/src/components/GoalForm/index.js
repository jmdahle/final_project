import React from 'react';
import './style.css';

class GoalForm extends React.Component {

    render() {
        return (
            <form>
                <div className='form-group'>
                    <label htmlFor='categoryId'>Select Category</label>
                    <select className='form-control' id='categoryId' name='categoryId' onChange={this.props.handleOnChange} value={this.props.categoryId}>
                        <option hidden selected>-- Select a Category --</option>
                    {this.props.categories.map( category => (
                        <option key={category._id} value={category._id}>
                            {category.categoryName} |  {category.categoryTagLine}
                        </option>
                    ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='goalName'>Goal Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Goal Name'
                        value={this.props.goalName}
                        name='goalName'
                        id='goalName' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='goalTagline'>Goal Tagline</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Goal Tagline'
                        value={this.props.goalTagline}
                        name='goalTagline'
                        id='goalTagline' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <button 
                    type='submit' 
                    className='btn btn-style'
                    onClick={this.props.handleGoalFormSubmit}
                >Add Goal!
                </button>
            </form>
        );
    }
}

export default GoalForm;