import React from 'react';
import "./style.css";

// // import React components
import Container from '../../components/Container';
import Visualizer from '../../components/Visualizer';

class Progress extends React.Component {
    componentDidMount = () => {

    }

    render() {
        return (
            <div className='visualizerDiv'>
                {/* <Container> */}
                    <h1 className="visualizerH1">Visualize Your Progress</h1>
                    <h2 className="visualizerH2">Mark your progress on the dates you've completed the task.</h2>
                    <Visualizer
                        visualizerData={this.props.visualizerData}
                        visualizerDates={this.props.visualizerDates}
                        changeVisualizerDates={this.props.changeVisualizerDates}
                        handleCompleteTask={this.props.handleCompleteTask}
                        handleIncompleteTask={this.props.handleIncompleteTask}
                    />
                {/* </Container> */}
            </div>
        );
    }
}

export default Progress;