import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';
import useClasses from '../../../customClasses';


function ListWidget(props: any) {
  const classes = useClasses(useStyles);
  const { t, i18n } = useTranslation();

  const periode = [
    'October 2018',
    'September 2018',
    'August 2018',
    'July 2018',
    'June 2018',
    'April 2018',
    'March 2018',
    'Febuary 2018'
  ];

  return (
    <Paper title={t('common:blog_archived')} icon="ion-folder" whiteBg desc="">
      <div className={classes.albumRoot}>
        <List component="nav">
          {periode.map((item: any, index: number) => (
            <ListItem key={index.toString()} button>
              <ListItemText primary={item} />
              <KeyboardArrowRight className={classes.flipRtl} />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

ListWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

ListWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ListWidget;
