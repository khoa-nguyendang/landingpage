import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { useTranslation } from 'react-i18next';
import Paper from '../../Paper';
import useStyles from '../list-style';
import useClasses from '../../../customClasses';


function ProfileWidget(props: any) {
  const classes = useClasses(useStyles);
  const { t, i18n } = useTranslation();
  const products = [{
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '32'
  },
  {
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '20'
  },
  {
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '15'
  },
  {
    image: 'https://source.unsplash.com/random',
    text: 'Sed lacinia velit',
    price: '21'
  }];

  return (
    <Paper title={t('common:list_related')} icon="ion-ios-pricetag" whiteBg desc="Donec commodo convallis ligula eget suscipit orci.">
      <div className={classes.albumRoot}>
        <Grid container spacing={2}>
          {products.map((item: any, index: number) => (
            <Grid
              key={index.toString()}
              item
              xs={6}
              sm={3}
              md={6}
              className={classes.productItem}
            >
              <ButtonBase href="!#">
                <div className={classes.image} style={{ backgroundImage: `url(${item.image})` }} />
                <Typography noWrap display="block" variant="body1">{item.text}</Typography>
                <Typography variant="h6" className={classes.price}>
                  $
                  {item.price}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center">
          <Button fullWidth color="secondary">
            {t('common:btn_seeall')}
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

ProfileWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

ProfileWidget.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ProfileWidget;
