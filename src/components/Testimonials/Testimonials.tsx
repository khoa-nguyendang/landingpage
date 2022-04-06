import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import Carousel from 'react-slick';
import useStyle from './testi-style';
import imgAPI from '~/public/images/imgAPI';
import { useTranslation } from 'react-i18next';
import { useText, useTextAlign } from '~/theme/common';
import TestiCard from '../Cards/TestiCard';
import useClasses from '../../customClasses';


const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe - CTO La Lieur'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe - VP Company'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe - Graphic Designer'
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe - Senior Graphic Designer'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe - CEO Software House'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe - Senior Graphic Designer'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'Jovelin Doe - Senior Graphic Designer'
  }
];

function Testimonials(props: any) {
  const classes = useStyle();
  const { t, i18n } = useTranslation();

  const align = useTextAlign();
  const text = useClasses(useText);
  const [loaded, setLoaded] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={classes.testimonialWrap}>
      <Typography gutterBottom variant="h3" className={clsx(text.capitalize, align.textCenter)} display="block">
        {t('common:starter-landing.header_testimonials')}
      </Typography>
      <Typography gutterBottom variant="body1" className={align.textCenter} display="block">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </Typography>
      <div className={classes.carousel}>
        { loaded && (
          <Carousel {...settings}>
            {testiContent.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <TestiCard
                  text={item.text}
                  avatar={item.avatar}
                  name={item.name}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default Testimonials;
