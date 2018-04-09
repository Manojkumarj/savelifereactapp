import React, {Component} from 'react';
import { connect } from 'react-redux';
import CategoryBanner from '../category/CategoryBanner';
import {
	
	fetchDonateRequestPostsByCategory,
	fetchDonateRequestPosts,
	fetchCategories	
}from '../../actions';

import ListView from './ListView'

const styles = {
  title: {
 
	  fontSize:26,
	  fontWeight:'bold',
	   left: 10,
  }
};

class DonateRequestSegment extends Component {
	componentDidMount(){
		const { fetchDonateRequestPostsByCategory,fetchDonateRequestPosts,fetchCategories } = this.props;
		const categoryRoute  = this.getCurrentCategoryRoute();
		if(categoryRoute){
			fetchDonateRequestPostsByCategory(categoryRoute);
			fetchCategories(categoryRoute)
		}
		else{

            fetchDonateRequestPosts();
		}		
		
	 }
	
	
	render(){
		let title  ="All Posts";
		const {  
	
		categories,currentCategory , 
		 posts =[]
		} = this.props;
		const categoryRoute = this.getCurrentCategoryRoute();
		if(categoryRoute)
		{
			title =categoryRoute;
		}
 const isValidCategory = this.validateCategory(categories, currentCategory);

		const filteredDonateRequestPosts =  posts.filter((post) => categoryRoute == null || post.category ==categoryRoute);
		const Data = isValidCategory ?(
		
		 <div>
		
                 <div 
                  
                    justify="center"
                    align="left"
                    spacing={24}>
						
					  {categoryRoute &&
					  
					  
      				     <CategoryBanner
               
                category={categoryRoute} />
		}
		  <div style={styles.title}>{title}</div>
                    {filteredDonateRequestPosts.map((post, index) => (
					    
                        <div key={index}
                           >
						   
                           < ListView post ={post}/>
                        </div>

                    ))}
                </div>
            </div>
		
		) :null;
		
		return (<div>{Data}</div>	)
		
	}
	
	getCurrentCategoryRoute(){
		const  {match }= this.props;
		 if (match && match.params && match.params.category ) {
            return match.params.category;
        }
        return null;		
	}
	validateCategory(categories, category){
		 return category === undefined ||
            categories.map(category => category.name)
                .includes(category);
		
		
	}
}
	
function mapStateToProps ({posts, categories}) {
    return {
        posts: posts.posts,
        categories: categories.categories,
        currentCategory: categories.currentCategory
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchDonateRequestPosts: () => dispatch(fetchDonateRequestPosts()),
        fetchDonateRequestPostsByCategory: (category) => dispatch(fetchDonateRequestPostsByCategory(category)),
        fetchCategories: (category) => dispatch(fetchCategories(category)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DonateRequestSegment);
