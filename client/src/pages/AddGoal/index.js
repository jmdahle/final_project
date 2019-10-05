import React from 'react';

import Container from '../../components/Container';
import SelectedCategory from '../../components/SelectedCategory';
import Instructions from '../../components/Instructions';
import GoalCard from '../../components/GoalCard';
import TaskOverlay from '../../components/TaskOverlay';
import OkLinkDialog from '../../components/OkLinkDialog';

import './style.css';



class AddGoal extends React.Component {

    componentDidMount = () => {
        let queryString = this.props.location.search;
        if (queryString) {
            let qsArray = queryString.split('=');
            console.log(qsArray);
            this.props.getCategoryMatch(qsArray[1]);
            this.props.getGoalsInCategory(qsArray[1]);
        }
    }

    render() {
        return (
            <div className='add-goal'>
                <Container>
                    {/* <h1 className="addGoalHeader">Add Goal</h1> */}
                    <SelectedCategory
                        handleOnChange={this.props.handleOnChange}
                        categoryId={this.props.categoryId}
                        getCategories={this.props.getCategories}
                        categories={this.props.categories}
                        selectedCategory={this.props.selectedCategory}
                        clearCategory={this.props.clearCategory}
                    />
                    <Instructions 
                        instructionsHeading='Instructions'
                        instructionsText='Select a goal.  Our personal coaching monkeys will select a list of activities for you to achieve your goal.  To complete a goal, you will need to successfully complete each of the tasks associated with the goal.  You complete each activity by either getting streak of consecutive days OR doing that activity a total number of times.'
                    />
                    <div className='goalCardContainer'>
                        {this.props.goals.length > 0 ?
                        this.props.goals.map( goal => (
                            <GoalCard
                                id={goal._id}
                                key={goal._id}
                                goalName={goal.goalName}
                                goalTagline={goal.goalTagline}
                                selectGoal={this.props.selectGoal}
                            />
                        )) : <span>No goals in this category.</span>}
                    </div>
                    <div>
                        <TaskOverlay 
                            showTaskOverlay={this.props.showTaskOverlay}
                            selectedGoal={this.props.selectedGoal}
                            tasks={this.props.tasks}
                            handleAddGoalFormSubmit={this.props.handleAddGoalFormSubmit}
                            taskOverlayClose={this.props.taskOverlayClose}
                        />
                    </div>
                    <div>
                        <OkLinkDialog
                            showOkDialog={this.props.showOkDialog}
                            okDialogText='Congratulations!  You took another step towards being less of a garbage person!  But seriously, you got this!'
                            okDialogLink='/manage'
                        />
                    </div>
                </Container>
            </div>
        );
    }
}

export default AddGoal;