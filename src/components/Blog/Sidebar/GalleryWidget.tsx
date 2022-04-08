import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';
import useClasses from '../../../customClasses';


function GalleryWidget(props: any) {
  const classes = useClasses(useStyles);
  const { t, i18n } = useTranslation();

  const imgData = [{
    src: 'https://source.unsplash.com/random'
  },
  {
    src: 'https://source.unsplash.com/random'
  },
  {
    src: 'https://source.unsplash.com/random'
  },
  {
    src: 'https://source.unsplash.com/random'
  }];

  return (
    <Paper title={t('common:blog_album')} icon="ion-images" whiteBg desc="">
      <div className={classes.albumRoot}>
        <ImageList rowHeight={180} className={classes.gridList}>
          {
            imgData.map((tile, index) => {
              if (index >= 4) {
                return false;
              }
              return (
                <ImageListItem key={index.toString()}>
                  <img src={tile.src} className={classes.img} alt="thumb" />
                  <ImageListItemBar
                    subtitle={(
                      <span>
                        by:&nbsp;
                        John Doe
                      </span>
                    )}
                    actionIcon={(
                      <IconButton className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    )}
                  />
                </ImageListItem>
              );
            })
          }
        </ImageList>
      </div>
      <Divider className={classes.divider} />
      <Grid container justifyContent="center">
        <Button color="secondary">
          See All
        </Button>
      </Grid>
    </Paper>
  );
}

GalleryWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

GalleryWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default GalleryWidget;
