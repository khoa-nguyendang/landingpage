import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useText } from '../../theme/common';
import { useTranslation } from 'react-i18next';
import useStyles from './list-style';
import ProductCard from '../Cards/ProductCard';
import useClasses from '../../customClasses';


function RelatedItems(props: any) {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();

  return (
    <Grid container justifyContent="center">
      <Grid item lg={10} md={12} xs={12}>
        <Box pt={5} px={2} pb={10}>
          <Box mb={3}>
            <h4 className={text.subtitle}>
              {t('common:list_related')}
            </h4>
          </Box>
          <Grid container className={classes.scrollTablet}>
            {[...Array(4)].map((e, index) => (
              <Grid
                item
                key={index.toString()}
                md={3}
                sm={4}
                xs={10}
              >
                <Box px={1}>
                  <ProductCard
                    rating={3}
                    price={20}
                    img="https://source.unsplash.com/random"
                    title="Sed lacinia velit"
                    desc="Proin pretium arcu eget metus porta consecteturc"
                    orientation="portrait"
                    type="full"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

RelatedItems.propTypes = {
  t: PropTypes.func.isRequired
};

export default RelatedItems;
