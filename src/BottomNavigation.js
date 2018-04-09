import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/receipt';
import AnimatedWrapper from './utilities/AnimatedWrapper';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
	
  },
};

const tilesData = [
  {
    img: 'http://res.cloudinary.com/save-life-react-cdn/image/upload/v1523270765/tumbnails1.jpg',
    title: 'BLOOD DONAR',
   
  },
  {
    img: 'http://res.cloudinary.com/save-life-react-cdn/image/upload/v1523270767/thumbnail2.jpg',
    title: 'BLOOD DONATION CENTER',   
  },
  {
    img: 'http://res.cloudinary.com/save-life-react-cdn/image/upload/v1523270768/thumbnail3.jpg',
    title: 'BLOOD REQUESTOR'   
  },
  {
    img: 'http://res.cloudinary.com/save-life-react-cdn/image/upload/v1523270794/thumbnail4.jpg',
    title: 'SAVE LIFE'    
  }
];


const BottomNavigation = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span> <b></b></span>}
          actionIcon={<IconButton><ActionHome color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default AnimatedWrapper(BottomNavigation);