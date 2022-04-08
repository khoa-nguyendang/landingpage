import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from '../../components/head';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header/BlogHeader';
import Headline from '../../components/Blog/Headline';
import PostCard from '../../components/Cards/PostCard';
import Sidebar from '../../components/Blog/Sidebar';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import useClasses from '../../customClasses';
import { useTranslation } from 'react-i18next';
import link from '../../public/text/link';

function BlogHome(props: any) {
  const classes = useClasses(useSpacing);
  const { t, i18n } = useTranslation();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Blog
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
          <Box pt={{ xs: 5, sm: 3, md: 4 }}>
            <Container>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Headline />
                </Grid>
              </Grid>
              <Box mt={8}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <PostCard {...props}
                      href={link.starter.blogDetail}
                      img="https://source.unsplash.com/random"
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="full"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <PostCard {...props}
                      href={link.starter.blogDetail}
                      img="https://source.unsplash.com/random"
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="full"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Grid spacing={4} container>
                  <Grid item md={8} xs={12}>
                    {[...Array(6)].map((e, index) => (
                      <Box
                        key={index.toString()}
                        mt={index > 0 ? 6 : 0}
                      >
                        <PostCard  {...props}
                          href={link.starter.blogDetail}
                          img="https://source.unsplash.com/random"
                          title="Maecenas rutrum dolor sed nisi"
                          desc="Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget"
                          date="12 Nov 2020"
                          orientation="portrait"
                          type="round"
                        />
                      </Box>
                    ))}
                    <Box mt={5} className={classes.arrow}>
                      <Grid container justifyContent="space-between">
                        <Button>
                          <ArrowBackIcon />
                          {t('common:btn_prev')}
                        </Button>
                        <Button>
                          {t('common:btn_next')}
                          <ArrowForwardIcon />
                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Sidebar />
                  </Grid>
                </Grid>
              </Box>
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

BlogHome.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

BlogHome.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlogHome;
