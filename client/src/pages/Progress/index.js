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
                        visualizerData={this.props.visualizerData}
                        visualizerDates={this.props.visualizerDates}
                        changeVisualizerDates={this.props.changeVisualizerDates}
                        handleCompleteTask={this.props.handleCompleteTask}
                        handleIncompleteTask={this.props.handleIncompleteTask}
                    />
                </Container>
            </div>
        );
    }
}

export default Progress;