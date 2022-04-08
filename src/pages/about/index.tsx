import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import clsx from 'clsx';
import Head from '../../components/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import Banner from '../../components/About/Banner';
import PhotoSlider from '../../components/About/PhotoSlider';
import TeamSlider from '../../components/About/TeamSlider';
import AboutVideo from '../../components/About/Video';
import AboutProgress from '../../components/About/Progress';
import ContactMap from '../../components/Forms/ContactMap';
import CallAction from '../../components/CallAction';
import CompanyLogo from '../../components/CompanyLogo';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import useClasses from '../../customClasses';

function Landing(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - About
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Banner />
        <div className={classes.spaceTopShort}>
          <CompanyLogo />
        </div>
        <Counter />
        <div className={classes.spaceTopShort}>
          <Container>
            <Grid container spacing={6}>
              <Grid item md={6} xs={12}>
                <AboutVideo />
              </Grid>
              <Grid item md={6} xs={12}>
                <AboutProgress />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.spaceTopShort}>
          <TeamSlider {...props}/>
        </div>
        <div className={clsx(classes.spaceTopShort, classes.spaceBottom)}>
          <PhotoSlider  {...props}/>
        </div>
        <CallAction  {...props}/>
        <div className={classes.spaceTop}>
          <ContactMap full  {...props}/>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
