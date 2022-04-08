import React, { useState, useEffect } from 'react';
import Head from '../components/head';
import PropTypes from 'prop-types';
import {
    ThemeProvider,
    createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import appTheme from '../theme/appTheme';
/* import css vendors */
import 'react-image-lightbox/style.css';
import '~/vendors/animate.css';
import '~/vendors/animate-slider.css';
import '~/vendors/hamburger-menu.css';
import '../vendors/animate-extends.css';
import '../vendors/react-top-loading-bar.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import App from '../App';
import { CircularProgress } from '@mui/material';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
    themeType = localStorage.getItem('oironTheme') || 'light';
}

function MyApp(props: any) {
    const { t, i18n } = useTranslation();
    const loadingTime = 1500;
    const [loading, setLoading] = useState(0);
    const [theme, setTheme] = useState({
        ...appTheme('mainTheme', themeType),
        direction: i18n.language === 'ara' ? 'rtl' : 'ltr'
    });

    useEffect(() => {
        // Set layout direction
        document.dir = i18n.language === 'ara' ? 'rtl' : 'ltr';
        // Remove preloader
        const preloader = document.getElementById('preloader');
        if (preloader !== null || undefined) {
            setTimeout(() => {
                preloader && preloader.remove();
            }, loadingTime);
        }

        // Remove loading bar
        setLoading(0);
        setTimeout(() => { setLoading(100); }, loadingTime + 500);

        // Refresh JSS in SSR
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles && jssStyles.parentNode && jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    const toggleDarkTheme = () => {
        const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
        localStorage.setItem('oironTheme', theme.palette.type === 'light' ? 'dark' : 'light');
        setTheme({
            ...appTheme('mainTheme', newPaletteType),
            direction: theme.direction,
        });
    };

    const toggleDirection = (dir: string) => {
        document.dir = dir;
        setTheme({
            ...theme,
            direction: dir,
            palette: {
                ...theme.palette
            }
        });
    };

    const muiTheme = createTheme(theme as any);
    const { Component, pageProps, router } = props; // eslint-disable-line
    return (
        <div>
            <Head {...props}>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
            </Head>
                <ThemeProvider theme={muiTheme}>
                    <CssBaseline />
                    <CircularProgress {...props}
                        height={0}
                        color={theme.palette.primary.main}
                        progress={loading}
                        className="top-loading-bar"
                    />
                    <div id="main-wrap">
                    <Component
                                {...pageProps}
                                onToggleDark={toggleDarkTheme}
                                onToggleDir={toggleDirection}
                                key={router.route}
                            />
                    </div>
                </ThemeProvider>
        </div>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
};

export default MyApp;
