import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './filter-style';
import useClasses from '../../customClasses';


function Search(props: any) {
  const { t, value, updateValue } = props;
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const align = useTextAlign();

  const handleUpdateValue = (event : any) => {
    updateValue(event.target.value);
  };

  return (
    <section className={classes.searchBanner}>
      <Container maxWidth="md">
        <Grid container alignItems="center" className={classes.searchBox}>
          <Grid item sm={12}>
            <h2 className={clsx(text.title2, align.textCenter)}>
              {t('common:list_title')}
            </h2>
            <h3 className={clsx(text.subtitle2, align.textCenter)}>
              {t('common:list_subtitle')}
            </h3>
            <div className={classes.search}>
              <FormControl component="form">
                <OutlinedInput
                  value={value}
                  onChange={(e) => handleUpdateValue(e)}
                  className={classes.input}
                  placeholder={t('common:list_search')}
                  startAdornment={<SearchIcon />}
                  labelWidth={0}
                />
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

Search.propTypes = {
  t: PropTypes.func.isRequired,
  value: PropTypes.string,
  updateValue: PropTypes.func.isRequired,
};

Search.defaultProps = {
  value: ''
};

Search.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Search;
