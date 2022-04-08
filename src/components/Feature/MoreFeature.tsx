import React from 'react';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import useStyles from './feature-style';
import { useTextAlign } from '../../theme/common';
import useClasses from '../../customClasses';


function MainFeature() {
  const classes = useClasses(useStyles);
  const align = useTextAlign;

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={clsx(classes.featureMore)}>
      <Grid container className={classes.featureItem} spacing={6}>
        <Grid md={6} xs={12} item>
          <div>
            <div>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </div>
            <div >
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <div >
              <div className={classes.deco1} />
            </div>
            <div >
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction={isTablet ? 'column-reverse' : 'row'} className={classes.featureItem} spacing={6}>
        <Grid md={6} xs={12} item>
          <div>
            <div>
              <div className={classes.deco1} />
            </div>
            <div>
              <figure className={classes.img}>
                <img src="https://source.unsplash.com/random" alt="img" />
              </figure>
            </div>
          </div>
        </Grid>
        <Grid md={6} xs={12} item>
          <div>
            <div >
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </div>
            <div >
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={12} item>
          <div className={classes.featureMore}>
            <div className={clsx(align.textCenter, classes.featureItem, classes.last)}>
              <div >
                <Typography variant="h3" className={classes.title}>
                  Lorem ipsum dolor
                </Typography>
              </div>
              <div >
                <Typography variant="body1" className={classes.text}>
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </Typography>
              </div>
              <div >
                <div className={classes.deco2} />
              </div>
              <div >
                <figure className={classes.imgFull}>
                  <img src="https://source.unsplash.com/random" alt="img" />
                </figure>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
