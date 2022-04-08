import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';
import useClasses from '../../../customClasses';


function CommentWidget(props: any) {
  const classes = useClasses(useStyles);
  const { t, i18n } = useTranslation();
  const comments = [
    {
      color: 'orange',
      name: 'John Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'pink',
      name: 'Jean Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'purple',
      name: 'Jim Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'indigo',
      name: 'Jihan Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'cyan',
      name: 'Jena Doe',
      comment: 'Duis viverra neque eget '
    },
    {
      color: 'green',
      name: 'Johan Doe',
      comment: 'Duis viverra neque eget '
    }
  ];

  const firstChar = (str: string) => str.charAt(0);

  return (
    <Paper title={t('common:blog_comment')} icon="ion-android-textsms" whiteBg desc="">
      <List component="nav" dense className={classes.profileList}>
        {comments.map((item: any, index: number) => (
          <ListItem disableGutters key={index.toString()} button>
            <Avatar className={clsx(classes.avatar, classes[item.color])}>
              {firstChar(item.name)}
            </Avatar>
            <ListItemText primary={item.name} secondary={item.comment} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

CommentWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

CommentWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default CommentWidget;
