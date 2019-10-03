// react
import React from "react";
import "./style.css";

// react bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
// import Container from "../../components/Container";
// import { Col, Row } from "../../components/Grid";
import UserGoalCard from "../../components/UserGoalCard";
// import GoalCard from '../../components/GoalCard';

class Manage extends React.Component {

    componentDidMount = () => {}

  render() {
    return (
      <Container>
        <Row>
          <Col size="xs-12 md-8">
             <h2 className="manageH2">Active Goals</h2> 
             <div>
              {this.props.userGoals ? (
                this.props.userGoals.filter(userGoal => userGoal.goalPercent !== 100).map(userGoal => (
                  <UserGoalCard
                        id={userGoal.userGoalId}
                        key={userGoal.userGoalId}
                        goalName={userGoal.goalName}
                        taskName={userGoal.taskName}
                        goalPercent={userGoal.goalPercent}
                  />
                ))
              ) : (
                <span>No goals in this section.</span>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12 md-8">
             <h2 className="manageH2">Achieved Goals</h2> 
             <div>
              {this.props.userGoals ? (
                this.props.userGoals.filter(userGoal => userGoal.goalPercent === 100).map(userGoal => 
                (
                  <UserGoalCard
                        id={userGoal.userGoalId}
                        key={userGoal.userGoalId}
                        goalName={userGoal.goalName}
                        goalPercent={userGoal.goalPercent}
                  />
                )
                
                )
              ) : (
                <span>No goals in this section.</span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manage;
