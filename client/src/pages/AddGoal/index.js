import React from 'react';

import Container from '../../components/Container';
import SelectedCategory from '../../components/SelectedCategory';


class AddGoal extends React.Component {
    render() {
        return (
            <div className='add-goal'>
                <Container>
                    <h1>Add Goal</h1>
                    <SelectedCategory
                        handleOnChange={this.props.handleOnChange}
                        categoryId={this.props.categoryId}
                        getCategories={this.props.getCategories}
                        categories={this.props.categories}
                        selectedCategory={this.props.selectedCategory}
                    />
                </Container>
            </div>
        );
    }
}

export default AddGoal;