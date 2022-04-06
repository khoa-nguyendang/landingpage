import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import clsx from 'clsx';
import { useTextAlign } from '~/theme/common';
import { useTranslation } from 'react-i18next';
import useStyles from '../list-style';
import useClasses from '../../../customClasses';


function HelperWidget(props: any) {
  const { t, i18n } = useTranslation();
  const classes = useClasses(useStyles);
  const align = useTextAlign();

  return (
    <Card className={clsx(classes.helpPaper, align.textCenter)}>
      <CardContent>
        <Typography variant="h6" align="center">
          {t('common:faq_luck')}
        </Typography>
        <Typography>
          {t('common:faq_luck_desc')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth color="primary" size="large" variant="outlined">
          {t('common:faq_luck_btn')}
        </Button>
      </CardActions>
    </Card>
  );
}

HelperWidget.propTypes = {
  t: PropTypes.func.isRequired,
};

export default HelperWidget;
