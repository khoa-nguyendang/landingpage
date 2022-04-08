import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Icon from '@mui/material/Icon';
import useStyles from '../header-style';
import useClasses from '../../../customClasses';
import { useTranslation } from 'react-i18next';


function MegaMenu(props: any) {
  const {
    dataMenu,
    open,
    toggle
  } = props;
  const classes = useClasses(useStyles);

  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');
  const { t, i18n } = useTranslation();

  const handleToggle = (id: any, event: any) => {
    setAnchorEl(event.currentTarget);
    toggle(id);
  };

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  return (
    <ul className={classes.multiMenu}>
      {dataMenu.map((item: any, index: number) => (
        <li key={index.toString()}>
          <div>
            <Button
              onClick={(e: any) => handleToggle(item.id, e)}
              ref={anchorRef}
              endIcon={<Icon>expand_more</Icon>}
            >
              {item.name}
            </Button>
            <Popper
              open={open[item.id] || false}
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
                    <Container maxWidth="md">
                      <Grid container spacing={1}>
                        {item.child.map((subitem: any, childIndex: number) => (
                          <Grid item sm={3} key={childIndex.toString()}>
                            <ListSubheader
                              disableSticky
                              component="div"
                              classes={{
                                root: classes.titleMega
                              }}
                            >
                              {subitem.name}
                            </ListSubheader>
                            <img src={subitem.thumb} alt="thumbnail" className={classes.thumbMenu} />
                            <List component="div">
                              {subitem.child.map((granditem: any, grandChildIndex: any) => (
                                <ListItem
                                  key={grandChildIndex.toString()}
                                  button
                                  className={classes.menuItem}
                                  component="a"
                                  href={granditem.link}
                                  selected={curURL === (curOrigin + langPath + granditem.link)}
                                >
                                  <ListItemText
                                    primary={granditem.name}
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
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        </li>
      ))}
    </ul>
  );
}

MegaMenu.propTypes = {
  dataMenu: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.object.isRequired
};

export default MegaMenu;
