import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import ContactMap from '../../components/Forms/ContactMap';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import Head from '../../components/head';
import useClasses from '../../customClasses';

function WithMap(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Contact Map
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container>
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <ContactMap  {...props}/>
          </div>
        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

WithMap.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

WithMap.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default WithMap;
