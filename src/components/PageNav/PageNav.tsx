import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


import Fab from '@mui/material/Fab';
import ArrowIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';
import navMenu from '../Header/data/single';
import useStyles from './pagenav-style';
import useClasses from '../../customClasses';


function createData(id: any, name: any, url: any) {
    return {
        id,
        name,
        url,
    };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <a href={(props as any).to} {...props} />; // eslint-disable-line
});

function PageNav(props: any) {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    let flagShow = false;

    const handleScroll = () => {
        const doc = document.documentElement;
        const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        const newFlagShow = (scroll > 500);
        if (flagShow !== newFlagShow) {
            setShow(newFlagShow);
            flagShow = newFlagShow;
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    const classes = useClasses(useStyles);
    const [menuList] = useState([
        createData(1, navMenu[0], '#' + navMenu[0].replace(/ /g, '_')),
        createData(2, navMenu[1], '#' + navMenu[1].replace(/ /g, '_')),
        createData(3, navMenu[2], '#' + navMenu[2].replace(/ /g, '_')),
        createData(4, navMenu[3], '#' + navMenu[3].replace(/ /g, '_')),
    ]);
    return (
        <div className={clsx(classes.pageNav, show && classes.show)}>
            <Tooltip
                title="To Top"
                placement="left"
                classes={{
                    tooltip: classes.tooltip
                }}
            >
                <Fab
                    color="primary"
                    aria-label="To top"
                    component={LinkBtn}
                    href="#home"
                    className={classes.fab}
                >
                    <ArrowIcon />
                </Fab>
            </Tooltip>
            <nav className={classes.sectionNav}>
                <div {...props}
                    items={navMenu}
                    currentClassName="active"
                >
                    {menuList.map((item: any) => (
                        <li
                            key={item.id.toString()}
                            style={{ top: 30 * (navMenu.length - item.id) }}
                            data-id={item.id}
                        >
                            <Tooltip {...props}
                                title={t('starter-landing:header_' + item.name)}
                                placement="left"
                                classes={{
                                    tooltip: classes.tooltip
                                }}
                            >
                                <a href={item.url} />
                            </Tooltip>
                        </li>
                    ))}
                </div>
            </nav>
        </div>
    );
}

PageNav.propTypes = {
    t: PropTypes.func.isRequired,
};

export default PageNav;
