import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LangIcon from '@mui/icons-material/Language';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Select, { SelectClasses } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import logo from '../../public/images/logo-starter.svg';
import brand from '../../public/text/brand';
import img from '../../public/images/imgAPI';
import { useTranslation } from 'react-i18next';
import useStyles from './blog-style';
import useClasses from '../../customClasses';


function Copyright() {
    const { t, i18n } = useTranslation();
  return (
    <Typography variant="body2" display="block" align="center" color="textSecondary">
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  );
}

const footer = {
  title: 'Quick Links',
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use'],
};

const news = [
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[4]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[1]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photo[3]
  }
];

function Blog(props: any) {
  const [ctn, setCtn] = useState< HTMLElement | null>(null);
  const classes: any | undefined = useClasses(useStyles);
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    lang: 'eng',
  });

  useEffect(() => {
    setValues({ lang: i18n.language });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event: any) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    if (event.target.value === 'ara') {
      i18n.changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n.changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return (
    <div className={classes.footer}>
      <Container fixed component="footer">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.starter.projectName}
              </Typography>
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('common:starter-landing.banner_subtitle')}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                {t('common:footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item: any, index: number) => (
                  <li key={item}>
                    <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            {news.map((item: any, index: number) => (
              <ButtonBase className={classes.blogItem} href="#" key={index.toString()}>
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    {t('common:footer_news')}
                  </Typography>
                  <Typography display="block" component="p">Sed imperdiet enim ligula vitae viverra. </Typography>
                </div>
              </ButtonBase>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-social-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-social-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-social-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-social-linkedin" />
              </IconButton>
            </div>
            <Select
              value={values.lang}
              onChange={handleChange}
              MenuProps={{
                container: ctn
              }}
              startAdornment={(
                <InputAdornment className={classes.icon} position="start">
                  <LangIcon />
                </InputAdornment>
              )}
              className={classes.selectLang}
              input={<OutlinedInput name="lang" id="outlined-lang-simple" />}
            >
              <MenuItem value="eng">English</MenuItem>
              <MenuItem value="deu">Deutsch</MenuItem>
              <MenuItem value="ara">العربيّة</MenuItem>
              <MenuItem value="ind">Bahasa Indonesia</MenuItem>
              <MenuItem value="prt">Português</MenuItem>
              <MenuItem value="zho">简体中文</MenuItem>
              <MenuItem value="vi">Tiếng Việt</MenuItem>
            </Select>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Blog.propTypes = {
  t: PropTypes.func.isRequired,
  toggleDir: PropTypes.func,
};

Blog.defaultProps = {
  toggleDir: () => {},
};

export default Blog;
