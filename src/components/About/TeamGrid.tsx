import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProfileCard from '../Cards/ProfileCard';
import useStyles from './about-style';
import useClasses from '../../customClasses';


function TeamGrid() {
  const classes = useClasses(useStyles);

  return (
    <Box py={5}>
      <Grid container spacing={5} className={classes.teamRoot}>
        {[...Array(9)].map((e, index) => (
          <Grid item key={index.toString()} md={4} sm={6} xs={12}>
           
              <div>
                <ProfileCard
                  connection={100}
                  favorites={10}
                  albums={12}
                  cover="https://source.unsplash.com/random"
                  name="John Dalton"
                  title="Web Designer"
                  type="full"
                  orientation="portrait"
                />
              </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeamGrid;
