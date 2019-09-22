import React from 'react';
import './style.css';


class CategoryForm extends React.Component {

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
                <div className='form-group'>
                    <label htmlFor='categoryTagLine'>Category Tag Line</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Category Tag Line'
                        value={this.props.categoryTagLine}
                        name='categoryTagLine'
                        id='categoryTagLine' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='categoryImgSrc'>Category Image Source</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Category Image Source'
                        value={this.props.categoryImgSrc}
                        name='categoryImgSrc'
                        id='categoryImgSrc' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <button 
                    type='submit' 
                    className='btn btn-style'
                    onClick={this.props.handleCategoryFormSubmit}
                >Add Category!
                </button>
            </form>
        );
    }
}

export default CategoryForm;