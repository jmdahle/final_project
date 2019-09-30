import React from 'react';

// // import React components
import Container from '../../components/Container';
import Visualizer from '../../components/Visualizer';

class Progress extends React.Component {
    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Visualizer Test</h1>
                    <Visualizer
                        userGoals={this.props.userGoals}
                        getUserGoalByUser={this.props.getUserGoalbyUser}
                        visualizerDates={this.props.visualizerDates}
                        resetVisualizerDates={this.props.resetVisualizerDates}
                    />
                </Container>
            </div>
        );
    }
}

export default Progress;