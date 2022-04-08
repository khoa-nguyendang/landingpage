import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';
const [expand, setExpand] = useState<{[key: string]: any}>({});
import useStyles from '../sidenav-style';
import navMenu from '../data/single';
import useClasses from '../../../customClasses';
import link from '../../../public/text/link';

function SingleNavMobile(props: any) {
  const classes = useClasses(useStyles);
  const { toggleDrawer, open } = props;
  const { t, i18n } = useTranslation();

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List className={classes.sideSinglelv}>
          {navMenu.map((item: any, index: number) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={item}
              index={index.toString()}
              {...props}
            >
              <ListItemText primary={item} className={classes.menuList} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.userMenu}>
          {['login', 'register'].map((text, index) => (
            <ListItem
              key={index.toString()}
              className={clsx(classes.noChild, curURL === curOrigin + langPath + '/' + text ? classes.current : '')}
              component="a"
              href={(link.starter as any)[text]}
              button
            >
              <ListItemText className={classes.menuList} primary={t('common:' + text)} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

SingleNavMobile.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

SingleNavMobile.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default SingleNavMobile;
