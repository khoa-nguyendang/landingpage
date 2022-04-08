import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';
import Paper from '../../Paper';
import useStyles from '../list-style';
import useClasses from '../../../customClasses';


function PeopleWidget(props: any) {
  const classes = useClasses(useStyles);
  const { t, i18n } = useTranslation();
  const people = [{
    img: '/images/avatars/pp_boy5.svg',
    name: 'John Doe',
    title: 'Web Designer'
  },
  {
    img: '/images/avatars/pp_girl.svg',
    name: 'Jean Doe',
    title: 'Executive Merketing'
  },
  {
    img: '/images/avatars/pp_boy2.svg',
    name: 'Jim Doe',
    title: 'Dev Ops'
  },
  {
    img: '/images/avatars/pp_girl2.svg',
    name: 'Jihan Doe',
    title: 'Director'
  },
  {
    img: '/images/avatars/pp_girl3.svg',
    name: 'Jena Doe',
    title: 'CEO'
  },
  {
    img: '/images/avatars/pp_boy3.svg',
    name: 'Johan Doe',
    title: 'iOS Developer'
  }];

  return (
    <Paper title="You may know" icon="ion-android-people" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.profileList}>
        <List dense>
          {people.map((item: any, index: number) => (
            <ListItem disableGutters key={index.toString()} button>
              <Avatar className={classes.avatar} alt="avatar" src={item.img} title="avatar" />
              <ListItemText primary={item.name} secondary={item.title} />
              <ListItemSecondaryAction>
                <Button variant="outlined" size="small">follow</Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            {t('common:btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

PeopleWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

PeopleWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default PeopleWidget;
