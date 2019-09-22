import React from 'react';
import './style.css';

class SelectedCategory extends React.Component {

    componentDidMount = () => {
        if (this.props.categoryId === '') {
            this.props.getCategories();
        }
    }

    render() {
        return (
            <div>
            {this.props.categoryId === '' ? (
                <form>
                    <div className='form-group'>
                        <label htmlFor='categoryId'>Select Category</label>
                        <select className='form-control' id='categoryId' name='categoryId' onChange={this.props.handleOnChange} value={this.props.categoryId}>
                            <option hidden selected>-- Select a Category --</option>
                        {this.props.categories.map( category => (
                            <option key={category._id} value={category._id}>{category.categoryName}</option>
                        ))}
                        </select>
                    </div>
                </form>
            ) : (
                <h2>Category Name (selected id = {this.props.categoryId})</h2>
            )}
            </div>

        );
    }
}

export default SelectedCategory;