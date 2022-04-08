import React, { Fragment, useState } from 'react';
import Head from '../../components/head';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ProductCards from '../../components/Cards/ProductCard';
import Filter from '../../components/Filter/Filter';
import Sorter from '../../components/Filter/Sorter';
import Search from '../../components/Filter/Search';
import brand from '../../public/text/brand';
import products from '../../public/api/products';
import { useSpacing, usePopup } from '../../theme/common';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useClasses from '../../customClasses';

const checkAll = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f'
];

function Products(props: any) {
  const { onToggleDark, onToggleDir } = props;

  const classes = useClasses(useSpacing);
  const popup = useClasses(usePopup);
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  const [openFilter, setOpenFilter] = useState(false);

  const [toggleView, setView] = useState('grid');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [rating, setRating] = useState(0);
  const [radio, setRadio] = useState('all');
  const [check, setCheck] = useState(checkAll);
  const [range, setRange] = useState({
    from: 0,
    to: 100
  });
  const [tag, setTag] = useState(['tag-one', 'tag-two', 'tag-three', 'tag-four']);
  const [sortBySelected, setBySelected] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortFrom, setFrom] = useState(-1);
  const [sortTo, setTo] = useState(1);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  const handleGetRange = (val: any) => {
    setRange(val);
  };

  const handleSortBy = (val: any) => {
    setBySelected(val);
    switch (val) {
      case 'title-asc':
        setSortBy('title');
        setFrom(1);
        setTo(-1);
        break;
      case 'title-desc':
        setSortBy('title');
        setFrom(-1);
        setTo(1);
        break;
      case 'price-asc':
        setSortBy('price');
        setFrom(-1);
        setTo(1);
        break;
      default:
        setSortBy('price');
        setFrom(1);
        setTo(-1);
    }
  };

  const filteredItems = () => {
    // Compare same tag
    const intersection = (firstArray: any, secondArray: any) => firstArray
      .filter((element: any) => secondArray.includes(element));

    // Check is all categories checked
    const checkFilter = (item: any, filterData: any) => {
      if (filterData !== 'all') {
        return item === filterData;
      }
      return true;
    };

    return products
      .filter(cardItem => checkFilter(cardItem.category, category)
        && checkFilter(cardItem.radio, radio)
        && cardItem.price >= range.from
        && cardItem.price <= range.to
        && cardItem.rating >= rating
        && check.indexOf(cardItem.check) > -1
        && intersection(tag, cardItem.tag).length > 0
      )
      .sort(
        (a: any, b: any) => {
          if (a[sortBy] > b[sortBy]) {
            return sortFrom;
          }
          return sortTo;
        }
      );
  };

  return (
    <Fragment>
      <Head {...props}>
        <title>
          { brand.starter.name }
          &nbsp; - Product List
        </title>
      </Head>
      <CssBaseline />
      <Dialog fullScreen open={openFilter} onClose={handleFilterClose} {...props}>
        <AppBar className={popup.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleFilterClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={popup.title}>
              Filter
            </Typography>
            <Button autoFocus color="inherit" onClick={handleFilterClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Box pt={10}>
            <Filter  {...props}
              filterCategory={category}
              changeCategory={setCategory}
              filterRating={rating}
              changeRating={setRating}
              filterRadio={radio}
              changeRadio={setRadio}
              filterCheck={check}
              changeCheck={setCheck}
              checkAll={() => setCheck(checkAll)}
              changeRange={handleGetRange}
              filterTag={tag}
              changeTag={setTag}
            />
          </Box>
        </Container>
      </Dialog>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Search value={keyword} updateValue={setKeyword}  {...props}/>
        <div className={classes.containerWrap}>
          <section>
            <Container>
              <Sorter
                view={toggleView}
                resultLength={filteredItems().length}
                sortBySelected={sortBySelected}
                sortBy={handleSortBy}
                switchView={setView}
                openFilter={handleFilterOpen}
              />
            </Container>
            <Box my={2} mx={{ sm: 2 }}>
              <Grid container spacing={isDesktop ? 3 : 0}>
                {isDesktop && (
                  <Grid item md={3} lg={2}>
                    <Filter  {...props}
                      filterCategory={category}
                      changeCategory={setCategory}
                      filterRating={rating}
                      changeRating={setRating}
                      filterRadio={radio}
                      changeRadio={setRadio}
                      filterCheck={check}
                      changeCheck={setCheck}
                      checkAll={() => setCheck(checkAll)}
                      changeRange={handleGetRange}
                      filterTag={tag}
                      changeTag={setTag}
                    />
                  </Grid>
                )}
                <Grid item lg={10} md={9}>
                  <Grid container justifyContent="center">
                    {filteredItems().length < 1 && (
                      <Grid item sm={12}>
                        <h3>Not found</h3>
                      </Grid>
                    )}
                    {filteredItems()
                      .map((item: any, index: number) => item.title.toLowerCase()
                        .indexOf(keyword) > -1 && (
                          <Grid
                            item
                            key={index.toString()}
                            sm={toggleView === 'grid' ? 4 : 12}
                          >
                            <Box
                              display={toggleView === 'grid' ? 'flex' : 'block'}
                              justifyContent={toggleView === 'grid' ? 'center' : 'flex-start'}
                              mb={4}
                              px={2}
                            >
                              <ProductCards  {...props}
                                rating={item.rating}
                                price={item.price}
                                title={item.title}
                                desc={`Category: ${item.category} ~ Tag: ${item.tag} ~ Check: ${item.check} ~ Radio: ${item.radio}`}
                                orientation={toggleView === 'grid' ? 'portrait' : 'landscape'}
                                img="https://source.unsplash.com/random"
                                type="round"
                                href="/collection/detail-product"
                              />
                            </Box>
                          </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </section>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

Products.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

Products.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Products;
