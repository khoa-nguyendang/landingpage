import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Head from '../../components/head';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import Pricing from '../../components/Pricing';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import useClasses from '../../customClasses';

function ContactPage(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Pricing
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box mt={{ sm: 3 }}>
            <Pricing  {...props}/>
          </Box>
          <div className={classes.spaceTopShort}>
            <Faq  {...props}/>
          </div>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

ContactPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default ContactPage;
