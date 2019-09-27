import React from 'react';

import Container from '../../components/Container';
import SelectedCategory from '../../components/SelectedCategory';
import Instructions from '../../components/Instructions';
import GoalCard from '../../components/GoalCard';
import './style.css';


class AddGoal extends React.Component {
    render() {
        return (
            <div className='add-goal'>
                <Container>
                    <h1 className="addGoalHeader">Add Goal</h1>
                    <SelectedCategory
                        handleOnChange={this.props.handleOnChange}
                        categoryId={this.props.categoryId}
                        getCategories={this.props.getCategories}
                        categories={this.props.categories}
                        selectedCategory={this.props.selectedCategory}
                    />
                    <Instructions 
                        instructionsHeading='Instructions'
                        instructionsText='Select a goal.  Our peronal coaching monkeys will select a list of activities for you to achieve your goal.  To complete a goal, you will need to successfully complete each of the tasks associated with the goal.  You complete each activity by either getting streak of consecutive days OR doing that activity a total number of times.'
                    />
                    <div>
                        {this.props.goals.length > 0 ?
                        this.props.goals.map( goal => (
                            <GoalCard
                                id={goal._id}
                                key={goal._id}
                                goalName={goal.goalName}
                                selectGoal={this.props.selectGoal}
                            />
                        )) : <span>No goals in this category.</span>}
                    </div>
                </Container>
            </div>
        );
    }
}

export default AddGoal;