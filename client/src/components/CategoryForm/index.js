import React from 'react';
import './style.css';

import API from '../../utils/API';

class CategoryForm extends React.Component {
    handleCategoryFormSubmit = event => {
        event.preventDefault();
        console.log('submit category clicked');
        let categoryData = {
            categoryName: this.props.categoryName
        }
        console.log(categoryData);
        API.addCategory(categoryData)
            .then(jsonData => {
                console.log(jsonData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <form>
                <div className='form-group'>
                    <label htmlFor='categoryName'>Category Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Category Name'
                        value={this.props.categoryName}
                        name='categoryName'
                        id='categoryName' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <button 
                    type='submit' 
                    className='btn btn-style'
                    onClick={this.handleCategoryFormSubmit}
                >Add Category!
                </button>
            </form>
        );
    }
}

export default CategoryForm;