import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';
import useClasses from '../../../customClasses';


function SidebarBlog(props: any) {
  const classes = useClasses(useStyles);
  const [email, setEmail] = useState('');
  const { t, i18n } = useTranslation();

  const handleChange = (event : any) => {
    setEmail(event.target.value);
  };

  return (
    <Paper title={t('common:blog_subscribe')} icon="ion-wifi" colorMode whiteBg noMargin desc="Get lates update from us">
      <div className={classes.subscribeForm}>
        <FormControl>
          <TextField
            label="Email"
            value={email}
            onChange={handleChange}
            margin="normal"
            required
            classes={{
              root: classes.whiteInputRoot,
              input: classes.whiteInputInput,
              underline: classes.underline
            }}
          />
        </FormControl>
        <Button className={classes.invertBtn} size="small" variant="outlined" type="submit">
          {t('common:btn_submit')}
        </Button>
      </div>
    </Paper>
  );
}

SidebarBlog.propTypes = {
  t: PropTypes.func.isRequired,
};

SidebarBlog.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default SidebarBlog;
