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
                        <label htmlFor='categoryId' className="selectCategory">Select Category</label>
                        <select className='form-control' id='categoryId' name='categoryId' onChange={this.props.handleOnChange} value={this.props.categoryId}>
                            <option hidden selected>-- Select a Category --</option>
                        {this.props.categories.map( category => (
                            <option key={category._id} value={category._id}>{category.categoryName}</option>
                        ))}
                        </select>
                    </div>
                </form>
            ) : (
                <div className="categoryNameTag">
                    <span className="categoryName">{this.props.selectedCategory.categoryName} </span>|
                    <span className="categoryTag">{this.props.selectedCategory.categoryTagLine}</span>
                    {/* <p>And load the image at: {this.props.selectedCategory.categoryImgSrc}</p> */}
                    <p className="changeCategoryButton"><button 
                            type='submit' 
                            className='btn navbutton'
                            onClick={this.props.clearCategory}
                        >Change Category
                    </button>
                    </p>
                </div>
            )}
            </div>

        );
    }
}

export default SelectedCategory;