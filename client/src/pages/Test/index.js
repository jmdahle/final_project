import React from 'react';
import './style.css';
// import API calls
import API from '../../utils/API';
// import React components
import Container from '../../components/Container';

import SelectedCategory from '../../components/SelectedCategory';


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
                </Container>
            </div>
        );
    }
}

export default Test;