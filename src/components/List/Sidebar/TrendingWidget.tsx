import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useText } from '../../../theme/common';
import Paper from '../../Paper';
import useStyles from '../list-style';
import useClasses from '../../../customClasses';


function TrendingWidget() {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);

  const trending = [{
    title: 'Vestibulum faucibus',
    share: 130
  },
  {
    title: 'Nulla eget lobortis lacus',
    share: 120
  },
  {
    title: 'Cras convallis',
    share: 100
  },
  {
    title: 'Quisque a consequat',
    share: 88
  },
  {
    title: 'Suspendisse',
    share: 90
  }];

  return (
    <Paper title="Trending now" icon="ion-arrow-graph-up-right" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.albumRoot}>
        <List component="nav">
          {trending.map((item: any, index: number) => (
            <ListItem key={index.toString()} button>
              <ListItemText
                primary={`${index + 1}. #${item.title}`}
                secondary={item.share + 'k Views'}
                classes={{
                  primary: text.bold
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

export default TrendingWidget;
