import React, { Fragment, ReactFragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import Contact from '../../components/Forms/Contact';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import Container from '@mui/material/Container';
import useClasses from '../../customClasses';
import Head from '../../components/head';
import { CssBaseline } from '@mui/material';

function ContactPage(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment {...props}>
      <Head {...props}>
        <title>
          { brand.starter.name } Contact
        </title>
      </Head>
      <CssBaseline {...props}/>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="md">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Contact {...props}/>
          </div>
        </Container>
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
