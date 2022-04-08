import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo';
const [expand, setExpand] = useState<{[key: string]: any}>({});
import SearchField from './TopNav/SearchField';
import Settings from './TopNav/Settings';
import useStyles from './header-style';
import multiple from './data/multiple';
import MultiLevel from './TopNav/MultiLevelClick';
import MobileMenu from './SideNav/MultiMobile';
import useClasses from '../../customClasses';
import link from '../../public/text/link';


function BlogHeader(props: any) {
  const [fixed, setFixed] = useState(false);

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

  const classes = useClasses(useStyles);
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      { isMobile && (<MobileMenu {...props} open={openDrawer} toggleDrawer={handleOpenDrawer} {...props}/>) }
      <AppBar
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                <a href={link.starter.home}>
                  <Logo type="landscape" />
                </a>
              </div>
              {isDesktop && (
                <div className={classes.mainMenu}>
                  <MultiLevel dataMenu={multiple} />
                </div>
              )}
            </nav>
            <nav>
              <Hidden xsDown>
                <SearchField short  {...props}/>
              </Hidden>
              { isDesktop && <span className={classes.vDivider} /> }
              <Settings {...props} toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </nav>
          </div>
          <Hidden smUp>
            <SearchField  {...props}/>
          </Hidden>
        </Container>
      </AppBar>
    </Fragment>
  );
}

BlogHeader.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default BlogHeader;
