import React from 'react';


// import React components
import Container from '../../components/Container';

import Card from '../../components/Card';
import CategoryForm from '../../components/CategoryForm';
import GoalForm from '../../components/GoalForm';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';


class Admin extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Administration</h1>
                    <Card heading='Add A Category'>
                        <CategoryForm 
                            categoryName={this.props.categoryName}
                            categoryTagLine={this.props.categoryTagLine}
                            categoryImgSrc={this.props.categoryImgSrc}
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
                    <hr />
                    <Card heading='Add a TaskList Item'>
                        <TaskForm
                            goalId={this.props.goalId}
                            goals={this.props.goals}
                            taskName={this.props.taskName}
                            weeklyTarget={this.props.weeklyTarget}
                            totalTarget={this.props.totalTarget}
                            handleOnChange={this.props.handleOnChange}
                            handleTaskFormSubmit={this.props.handleTaskFormSubmit}
                        />
                        <TaskList
                            tasks={this.props.tasks}
                        />
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Admin;