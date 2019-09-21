import React from 'react';
import './style.css';

import API from '../../utils/API';

class GoalForm extends React.Component {
    state = {
        categories: []
    }

    handleGoalFormSubmit = event => {
        event.preventDefault();
        console.log('submit goal clicked');
        let goalData = {
            categoryId: this.props.categoryId,
            goalName: this.props.goalName
        }
        console.log(goalData);
        API.addGoal(goalData)
            .then(jsonData => {
                console.log(jsonData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount = () => {
        // does this need to move to App.js so a re-query happens when a new category is added?
        console.log('loading category options');
        API.getCategories()
            .then(jsonData => {
                console.log(jsonData)
                this.setState({
                    categories: jsonData.data
                })
            });
    }

    render() {
        return (
            <form>
                <div class='form-group'>
                    <label htmlFor='categoryId'>Select Category</label>
                    <select className='form-control' id='categoryId' name='categoryId' onChange={this.props.handleOnChange} value={this.state.categoryId}>
                        <option hidden selected>-- Select a Category --</option>
                    {this.state.categories.map( category => (
                        <option key={category._id} value={category._id}>{category.categoryName}</option>
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
                <button 
                    type='submit' 
                    className='btn btn-style'
                    onClick={this.handleGoalFormSubmit}
                >Add Goal!
                </button>
            </form>
        );
    }
}

export default GoalForm;