import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useText } from '../../theme/common';
import useStyles from './about-style';
import useClasses from '../../customClasses';


function Progress() {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);

  const [play, setPlay] = useState(false);

  return (
    <div className={classes.progressWrap}>
        <ul>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-wand" />
              <Typography variant="h6" className={text.subtitle2}>UI Interface Design</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 80 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-social-dribbble-outline" />
              <Typography variant="h6" className={text.subtitle2}>Icon Design</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 70 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-ios-world-outline" />
              <Typography variant="h6" className={text.subtitle2}>HTML Prototyping</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 60 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-ios-camera-outline" />
              <Typography variant="h6" className={text.subtitle2}>Photo Editing</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 90 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
          <li>
            <div className={classes.textIcon}>
              <i className="ion-ios-snowy" />
              <Typography variant="h6" className={text.subtitle2}>Graphic Illustrations</Typography>
            </div>
            <LinearProgress
              variant="determinate"
              value={play ? 80 : 0}
              classes={{
                root: classes.progressBg,
                bar: classes.bar
              }}
            />
          </li>
        </ul>
    </div>
  );
}

export default Progress;
