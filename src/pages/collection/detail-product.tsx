import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Head from '../../components/head';
import { useSpacing } from '../../theme/common';
import Header from '../../components/Header';
import Detail from '../../components/List/Detail';
import Description from '../../components/List/Description';
import RelatedItems from '../../components/List/RelatedItems';
import CommentGroup from '../../components/Comment/Group';
import Footer from '../../components/Footer';
import brand from '../../public/text/brand';
import useClasses from '../../customClasses';

function DetailProduct(props: any) {
  const classes = useClasses(useSpacing);
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Detail Product
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box pt={{ lg: 4 }}>
            <Detail  {...props}/>
            <Description  {...props}/>
            <RelatedItems  {...props}/>
            <CommentGroup  {...props}/>
          </Box>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

DetailProduct.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default DetailProduct;
