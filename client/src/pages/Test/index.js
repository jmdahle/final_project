import React from 'react';
import './style.css';

// import React components
import Container from '../../components/Container';

import Card from '../../components/Card';



class Test extends React.Component {



    render() {
        return (
            <div>
                <Container>

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
                    </Card>
                </Container>

            </div>
        );
    }
}

export default Test;