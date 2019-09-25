import React from 'react';
import './style.css';

const GoalCard = ({selectGoal, goalName, id}) =>{
    return(
        <div className='goal-card' onClick={() => selectGoal(id)}>
        <div className='goal-card-header'>
            <h5>{goalName}</h5>
        </div>
        <div className='goal-card-body'>Text for the goal.</div>
        </div>
    )
}

export default GoalCard;