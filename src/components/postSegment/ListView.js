import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import AnimatedWrapper from '../../utilities/AnimatedWrapper';
const iconStyles = {
  marginLeft: 24,
  color:'#ff3860',
 alignSelf: 'flex-end',
 fontWeight: 'bold'
};
class ListView extends Component {

    render() {
       const {
            post: {name,address,category,image,group}
                 } = this.props;
        return (
<MuiThemeProvider>
           <Card>
    <CardHeader
      title={name}
      subtitle={address}
      avatar={image}>
 </CardHeader> 
 <FontIcon className="material-icons" style={iconStyles}>{group}</FontIcon>
  
    </Card>
	
	</MuiThemeProvider>		 
			  
        );
    }
}


export default  AnimatedWrapper(ListView);
   
