import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo';
const [expand, setExpand] = useState<{[key: string]: any}>({});
import Settings from './TopNav/Settings';
import useStyles from './header-style';
import useClasses from '../../customClasses';
import link from '../../public/text/link';


function Basic(props: any) {
  const [fixed, setFixed] = useState(false);
  const classes = useClasses(useStyles);
  // Media QUery
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const {
    onToggleDark,
    onToggleDir,
    text,
    href
  } = props;
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="relative"
      id="header"
      className={clsx(
        classes.header,
        fixed && classes.fixed,
      )}
    >
      <Container fixed={isDesktop}>
        <div className={classes.headerContent}>
          <nav className={clsx(classes.navMenu, classes.flex)}>
            <div className={classes.logo}>
              <a href={link.starter.home}>
                <Logo type="landscape" />
              </a>
            </div>
          </nav>
          <nav className={classes.userMenu}>
            <Button href={href}>{text}</Button>
            { isDesktop && <span className={classes.vDivider} /> }
            <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} {...props}/>
          </nav>
        </div>
      </Container>
    </AppBar>
  );
}

Basic.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  href: PropTypes.string,
  text: PropTypes.string
};

Basic.defaultProps = {
  href: '/',
  text: 'login'
};

export default Basic;
