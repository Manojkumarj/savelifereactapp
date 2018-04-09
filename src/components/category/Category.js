import React, {Component} from 'react';
import CategoryBanner from './CategoryBanner';
import { connect } from 'react-redux';
import DonateRequestSegment from '../postSegment/DonateRequestSegment';
import HomeCategories from './CategoryHome';
class Category extends Component {
    render() {
        const classes = this.props.classes;
        const categories = this.props.categories || [];
		const {  posts, history, categoryPath } = this.props;
		let  segmentCategoryToDisplay = [];
	        return (
			  <div className="container">
			   <div className="columns">
                  <HomeCategories />
                
          </div>
		    <h3 className="title is-3 is-spaced"></h3>


  </div>
  
        );
    }
}
export default Category
