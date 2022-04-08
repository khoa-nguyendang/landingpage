import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import Head from '../../components/head';
import { useSpacing } from '../../theme/common';
import brand from '../../public/text/brand';
import Header from '../../components/Header';
import Search from '../../components/Filter/Search';
import FaqList from '../../components/Faq/FaqList';
import TopicList from '../../components/Faq/TopicList';
import HelperWidget from '../../components/List/Sidebar/HelperWidget';
import Footer from '../../components/Footer';
import useClasses from '../../customClasses';

function Faq(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;
  const [keyword, setKeyword] = useState('');

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Faq
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Search value={keyword} updateValue={setKeyword}  {...props}/>
        <div className={classes.containerWrap}>
          <div className={clsx(classes.containerGeneral, classes.spaceTopShort)}>
            <Grid spacing={3} justifyContent="center" container>
              <Grid item md={6} xs={12}>
                <Box px={3}>
                  <FaqList />
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box px={3}>
                  <div className={classes.spaceBottomShort}>
                    <TopicList  {...props}/>
                  </div>
                  <div className={classes.spaceBottomShort}>
                    <HelperWidget  {...props}/>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

Faq.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Faq.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Faq;
