import React from 'react';
import './style.css';
// import API calls
import API from '../../utils/API';
// import React components
import Container from '../../components/Container';
import Card from '../../components/Card';

import Visualizer from '../../components/Visualizer';



class Test extends React.Component {


    render() {
        return (
            <div>
                <Container>
                    <Visualizer
                        startdate='10/1/2019'
                        numdays='10'
                    />
                </Container>
            </div>
        );
    }
}

export default Test;