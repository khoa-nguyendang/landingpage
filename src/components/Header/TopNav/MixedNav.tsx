import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Scrollspy from 'react-scrollspy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Icon from '@mui/material/Icon';
import { withTranslation, i18n } from '~/i18n';
import useStyles from '../header-style';
import navMenu from '../data/single';
import useClasses from '../../../customClasses';


const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props: any) {
  const {
    menuPrimary,
    menuSecondary,
    open,
    toggle,
    close,
    singleNav,
    t
  } = props;
  const classes = useClasses(useStyles);

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
    toggle();
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.options.localeSubpaths[i18n.language]);
  }, []);

  return (
    <Scrollspy
      items={navMenu}
      currentClassName="active"
    >
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          {singleNav ? (
            <Button component={AnchorLink} offset={() => 100} href={item.url}>
              {t('starter-landing:header_' + item.name)}
            </Button>
          ) : (
            <Button href={'/' + item.url}>
              {t('starter-landing:header_' + item.name)}
            </Button>
          )}
        </li>
      ))}
      <li>
        <div>
          <Button
            onClick={(e) => handleToggle(e)}
            ref={anchorRef}
            endIcon={<Icon>expand_more</Icon>}
          >
            {t('common:header_sample_page')}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorEl}
            disablePortal={false}
            role={undefined}
            transition
            className={classes.megaMenuRoot}
          >
            {({ TransitionProps, placement }) => (
              <Fade
                {...TransitionProps}
                style={{ width: '100%', transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
              >
                <Paper className={classes.megaMenu}>
                  <ClickAwayListener onClickAway={close}>
                    <Container maxWidth="md">
                      <Grid container spacing={1}>
                        {menuSecondary.map((subitem, index) => (
                          <Grid item sm={3} key={index.toString()}>
                            <ListSubheader disableSticky component="div" className={classes.titleMega}>
                              {subitem.name}
                            </ListSubheader>
                            <img src={subitem.thumb} alt="thumbnail" className={classes.thumbMenu} />
                            <List component="div">
                              {subitem.child.map((item, subIndex) => (
                                <ListItem
                                  key={subIndex.toString()}
                                  button
                                  component="a"
                                  href={item.link}
                                  selected={curURL === (curOrigin + langPath + item.link)}
                                >
                                  <ListItemText
                                    primary={t('common:header_' + item.name)}
                                    classes={{
                                      primary: classes.menuList
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Grid>
                        ))}
                      </Grid>
                    </Container>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </li>
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  menuSecondary: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  singleNav: PropTypes.bool,
  t: PropTypes.func.isRequired
};

MixedNav.defaultProps = {
  singleNav: false
};

MixedNav.getInitialProps = async () => ({
  namespacesRequired: ['common', 'starter-landing'],
});

export default MixedNav;
