import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import brand from '~/public/text/brand';
import { useTranslation } from 'react-i18next';
import menu from '../Header/data/single';
import useStyles from './basic-style';
import useClasses from '../../customClasses';


function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center">
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  );
}

function Basic(props: any) {
  const classes = useClasses(useStyles);
  const { t, i18n } = useTranslation();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <nav>
          <ul>
            {menu.map((item, index) => (
              <li key={index.toString()}>
                <Link href={'#' + item} variant="subtitle1">
                  {t('common:starter-landing.header_' + item)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.socmed}>
          <IconButton aria-label="FB" className={classes.icon} size="small">
            <i className="ion-social-twitter" />
          </IconButton>
          <IconButton aria-label="TW" className={classes.icon} size="small">
            <i className="ion-social-facebook" />
          </IconButton>
          <IconButton aria-label="IG" className={classes.icon} size="small">
            <i className="ion-social-instagram" />
          </IconButton>
        </div>
      </Container>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}

Basic.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Basic;
