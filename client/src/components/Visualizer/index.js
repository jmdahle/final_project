import React from 'react';
import './style.css'

class Visualizer extends React.Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <table>
                    <VizHeader
                        visualizerDates={this.props.visualizerDates}
                    />
                    <tbody>

                    </tbody>
                </table>

            </div>
        );
    }
}

class VizHeader extends React.Component {
    render() {
        return(
            <thead>
                <tr>
                    <td>&nbsp;</td>
                    <td>&lt;</td>
                    {this.props.visualizerDates.map( date => (
                            <td key={date}>{date}</td>
                        )
                    )}
                    <td>&gt;</td>
                    <td>CURR</td>
                    <td>LONG</td>
                    <td>TOTAL</td>
                </tr>
            </thead>
        )
    }
}

export default Visualizer;