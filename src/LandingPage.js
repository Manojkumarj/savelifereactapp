import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigation from './BottomNavigation'
import HomeCategories from './components/category/Category';
import DonateRequestSegment from './components/postSegment/DonateRequestSegment';
import { Route, withRouter } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Logo from 'material-ui/svg-icons/content/add-box';

	const styles = {
  logoheader:{
	  color:'white',
	  fontSize:26,
	  fontWeight:'bold',
	   left: 10,
	   
  },
	 tagline:{
	  color:'white',
	  fontSize:36,
	  textAlign:'center',
	  marginTop: 140,
	   marginLeft: 50,
  }  
	  
};
class LandingPage extends Component {
  render() {
    return (
	<div>
     	
               <Route exact path="/" render={() => (
 
            <div>
					 <MuiThemeProvider>
					 
					            <div  class ="home-background">
											 <div style ={styles.logoheader}><IconButton><Logo color="white" /> </IconButton>S A V E L I F E</div>
											  <div style ={styles.tagline}>A network platform that connects blood banks, blood donors and blood requesters</div>
	  </div>
                       <BottomNavigation/>	
					    <div >  </div>
					   <HomeCategories/>
					   </MuiThemeProvider>

					   </div>
                )}/>
				<Route exact path="/:category" component={DonateRequestSegment}/>
	  </div>
    );
	 
  }
}

export default withRouter(LandingPage);
