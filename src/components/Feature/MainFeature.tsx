import React from 'react';
import Typography from '@mui/material/Typography';
import BackupIcon from '@material-ui/icons/Backup';
import ExploreIcon from '@material-ui/icons/Explore';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import Grid from '@mui/material/Grid';
import useStyles from './feature-style';
import useClasses from '../../customClasses';


function MainFeature() {
  const classes = useClasses(useStyles);
  return (
    <div className={classes.pageSection}>
      <Grid container className={classes.root} spacing={6}>
        <Grid sm={4} item>
          <div className={classes.featureList}>
            <BackupIcon className={classes.icon} />
            <Typography variant="h5">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1">
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
            </Typography>
          </div>
        </Grid>
        <Grid sm={4} item>
          <div className={classes.featureList}>
            <ExploreIcon className={classes.icon} />
            <Typography variant="h5">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1">
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
            </Typography>
          </div>
        </Grid>
        <Grid sm={4} item>
          <div className={classes.featureList}>
            <MusicIcon className={classes.icon} />
            <Typography variant="h5">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1">
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
