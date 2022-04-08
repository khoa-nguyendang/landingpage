import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from '../../components/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header/BlogHeader';
import Article from '../../components/Blog/Article';
import Sidebar from '../../components/Blog/Sidebar';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import useClasses from '../../customClasses';

function BlogDetail(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Blog Detail
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box pt={5}>
            <Container>
              <Grid container spacing={4}>
                <Grid item md={8} xs={12}>
                  <Article  {...props}/>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
        <div id="footer">
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogDetail.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

BlogDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlogDetail;
