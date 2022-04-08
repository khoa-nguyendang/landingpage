import React from 'react';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useText } from '../../theme/common';
import useStyles from './blog-style';
import useClasses from '../../customClasses';
import link from '../../public/text/link';


function Headline() {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  return (
    <Card className={classes.blogHeadline}>
      <CardMedia className={classes.media} image="https://source.unsplash.com/random" />
      <CardActionArea href={link.starter.blogDetail}>
        <CardContent>
          <span className={classes.anchorContent}>
            <span className={clsx(classes.headlineTitle, text.title2)}>
              Pellentesque habitant morbi tristique senectus Proin pretium arcu eget.
            </span>
            <span className={clsx(classes.subtitle, text.subtitle2)}>
              Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this posts contents.
            </span>
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Headline;
