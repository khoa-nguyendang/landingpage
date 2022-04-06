import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import useStyles from './news-card-style';
import useClasses from '../../customClasses';


function NewsCard(props: any) {
  const classes = useClasses(useStyles);
  const {
    headline,
    title,
    img,
    orientation,
    type,
    t
  } = props;
  return (
    <Card className={clsx(classes.newsCard, classes[orientation], classes[type])}>
      <div className={classes.figure}>
        <CardMedia className={classes.media} image={img} title="thumb" />
      </div>
      <div className={classes.properties}>
        <CardContent className={classes.desc}>
          <div className={classes.text}>
            <Typography variant="caption" className={classes.title}>{headline}</Typography>
            <Typography display="block" noWrap variant="h6">{title}</Typography>
          </div>
        </CardContent>
        <CardActions>
          {type === 'portrait' && <Box p={1} flexGrow={1} />}
          <Button className={classes.btn}>
            {t('common:btn_read_more')}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,
  t: PropTypes.func.isRequired
};

NewsCard.defaultProps = {
  orientation: 'portrait',
  type: 'full', // available props: full, rounded, over, oval
};

export default NewsCard;
