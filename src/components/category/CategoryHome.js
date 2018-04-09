import React, {Component} from 'react';
import { connect } from 'react-redux';
import CategoryWidget from './CategoryWidget';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    fetchCategories
} from '../../actions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DonateRequestSegment from '../postSegment/DonateRequestSegment';
class CategoryHome extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    render() {
        const classes = this.props.classes;
        const categories = this.props.categories || [];
		const posts = this.props.posts;
        return (
		      
			  <div className="container">
			 
			   
			    <h3 className="title is-3 is-spaced"></h3>
   <div className="container">
         <div className="columns">
            {categories &&
             categories.map((category, index) => {
              
                return (
				<CategoryWidget category={category}
				 linkTo={`/${category.path}`}
                    key={index}
                    colorToApply={'is-danger'}
                    title={category.name}
                    details = "Save Life"
				/>
							
                 
                )
              })}
          </div>
		   <DonateRequestSegment />
    </div>
  </div>
  
        );
    }
}


function mapStateToProps ({categories}) {
    return {
        categories: categories.categories
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryHome);
