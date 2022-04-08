import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useStyles from './counter-style';
import useClasses from '../../customClasses';

function Counter(props: any) {
  const classes = useClasses(useStyles);
  const { dark } = props;
  const [play, setPlay] = useState(false);

  return (
    <div className={clsx(classes.counterWrap, dark ? classes.dark : '')}>
      <Container maxWidth="md">
          <Grid container justifyContent="center" alignItems="center" className={classes.root} spacing={6}>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <AcUnitIcon />
                <div className={classes.text}>
                  <Typography variant="h6">
                    Lorem Ipsum dolor
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <ColorLensIcon />
                <div className={classes.text}>
                  <Typography variant="h6">
                    Pellentesque ac bibendum
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h6">
                    Consectetur adipiscing
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  dark: PropTypes.bool,
};

Counter.defaultProps = {
  dark: false,
};

export default Counter;
