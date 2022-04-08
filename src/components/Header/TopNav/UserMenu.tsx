import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Settings from './Settings';
import useStyles from '../header-style';
import useClasses from '../../../customClasses';
import link from '../../../public/text/link';


function UserMenu(props: any) {
  const classes = useClasses(useStyles);
  const theme = useTheme();
  const { onToggleDark, onToggleDir, t } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.userMenu}>
      { isDesktop && (
        <div>
          <Button href={link.starter.login}>{t('common:login')}</Button>
          <Button variant="contained" color="primary" href={link.starter.register}>{t('common:register')}</Button>
          <span className={classes.vDivider} />
        </div>
      )}
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir}  {...props}/>
    </div>
  );
}

UserMenu.propTypes = {
  t: PropTypes.func.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

UserMenu.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default UserMenu;
