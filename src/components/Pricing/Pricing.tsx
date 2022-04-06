import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { useText, useTextAlign } from '~/theme/common';
import PricingCard from '../Cards/PricingCard';
import useStyles from './pricing-style';
import useClasses from '../../customClasses';


const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'pricing_free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Personal',
    price: '5',
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
  }
];

function Pricing(props: any) {
  const classes = useClasses(useStyles);
  const align = useTextAlign();
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <h3 className={clsx(text.capitalize, text.title, align.textCenter)}>
        {t('common:pricing_title')}
      </h3>
      <p className={clsx(text.subtitle2, align.textCenter)}>
        {t('common:pricing_desc')}
      </p>
      <div className={classes.pricingWrap}>
        <Grid container spacing={3} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <PricingCard
                title={tier.title}
                subheader={tier.subheader}
                price={tier.price}
                description={tier.description}
                buttonText={t('common:' + tier.buttonText)}
                buttonVariant={tier.buttonVariant}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

Pricing.propTypes = {
  t: PropTypes.func.isRequired
};

export default Pricing;
