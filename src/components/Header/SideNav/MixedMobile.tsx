import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useTranslation } from 'react-i18next';
import useStyles from '../sidenav-style';
import navMenu from '../data/single';
import navPage from '../data/sample-pages';
import link from '../../../public/text/link';
import useClasses from '../../../customClasses';


function MixedMobile(props: any) {
  const classes = useClasses(useStyles);
  const { toggleDrawer, open } = props;
  const [expand, setExpand] = useState<{[key: string]: any}>({});
  const { t, i18n } = useTranslation();

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  const handleToggle = (id: any) => {
    setExpand({
      ...expand,
      [id]: !expand[id]
    });
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  const childMenu = (menu: any, item: any) => (
    <Collapse in={menu.samplePage || false} timeout="auto" unmountOnExit>
      {item.map((subitem: any, index: number) => (
        <List
          key={index.toString()}
          className={classes.groupChild}
          component="div"
          disablePadding
          subheader={(
            <ListSubheader
              className={classes.titleMega}
              disableSticky
              component="div"
              id="nested-list-subheader"
            >
              {subitem.name}
            </ListSubheader>
          )}
        >
          {subitem.child.map((granditem: any, indexChild: number) => (
            <ListItem
              key={indexChild.toString()}
              className={clsx(
                classes.noChild,
                curURL === curOrigin + langPath + granditem.link ? classes.current : ''
              )}
              component="a"
              href={granditem.link}
              button
            >
              <ListItemText className={classes.menuList} primary={granditem.name} />
            </ListItem>
          ))}
        </List>
      ))}
    </Collapse>
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
      <div
        className={classes.mobileNav}
        role="presentation"
      >
        <div className={open ? classes.menuOpen : ''}>
          <List component="nav" className={classes.sideSinglelv}>
            {navMenu.map((item: any, index: number) => (
              <ListItem
                button
                index={index.toString()}
                component="a"
                href={`#${item}`}
                key={item}
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
                {...props}
              >
                <ListItemText primary={item} className={classes.menuList} />
              </ListItem>
            ))}
            <ListItem
              button
              className={expand.samplePage ? classes.currentParent : ''}
              onClick={() => handleToggle('samplePage')}
            >
              <ListItemText className={classes.menuList} primary={t('common:header_sample_page')} />
              {expand.samplePage ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            { childMenu(expand, navPage) }
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
    </SwipeableDrawer>
  );
}

MixedMobile.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

MixedMobile.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default MixedMobile;
