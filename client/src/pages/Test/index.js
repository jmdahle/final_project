import React from 'react';
import './style.css';

// import React components
import Container from '../../components/Container';

import Card from '../../components/Card';
import SelectedCategory from '../../components/SelectedCategory';
import Instructions from '../../components/Instructions';
import CategoryForm from '../../components/CategoryForm';
import GoalForm from '../../components/GoalForm';
import TaskItem from '../../components/TaskItem';


class Test extends React.Component {


    render() {
        return (
            <div>
                <Container>
                    <h1>Test:AddGoal</h1>
                    <SelectedCategory 
                        categoryId={this.props.categoryId}
                        categories={this.props.categories}
                        getCategories={this.props.getCategories}
                        handleOnChange={this.props.handleOnChange}
                    />
                    <Instructions
                        instructionsHeading='Instructions'
                        instructionsText='Select a Goal.'
                    />
                    <hr />
                    <Card heading='Add A Category'>
                        <CategoryForm 
                            categoryName={this.props.categoryName}
                            categoryTagLine={this.props.categoryTagLine}
                            categroyImgSrc={this.props.categoryImgSrc}
                            handleOnChange={this.props.handleOnChange}
                            handleCategoryFormSubmit={this.props.handleCategoryFormSubmit}
                        />
                    </Card>
                    <hr />
                    <Card heading='Add A Goal'>
                        <GoalForm 
                            categoryId={this.props.categoryId}
                            goalName={this.props.goalName}
                            categories={this.props.categories}
                            handleOnChange={this.props.handleOnChange}
                            handleGoalFormSubmit={this.props.handleGoalFormSubmit}
                        />
                    </Card>
                    <Card heading='Add a TaskList'>
                        <table>
                            <TaskItem
                                taskIncludeYN='false'
                                taskName='Just a task name'
                                weeklyTarget='7'
                                totalTarget='21'
                            />                            
                        </table>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Test;