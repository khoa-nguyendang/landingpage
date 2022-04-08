import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useText } from '../../theme/common';
import useStyles from './faq-style';
import useClasses from '../../customClasses';


const topics = [{
  title: 'Nullam pulvinar pellentesque',
  href: '#topic1'
},
{
  title: 'Sed luctus mauris',
  href: '#topic2'
},
{
  title: 'Vestibulum libero',
  href: '#topic3'
},
{
  title: 'Pellentesque a magna eget',
  href: '#topic4'
},
{
  title: 'Suspendisse pulvinar non orci vel lobortis',
  href: '#topic5'
},
{
  title: 'Quisque posuere at nisi',
  href: '#topic6'
}];

function TopicList(props: any) {
  const classes = useClasses(useStyles);
  const text = useClasses(useText);
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Box mb={3}>
        <h4 style={text.subtitle}>
          {t('common:faq_topic')}
        </h4>
      </Box>
      <ul className={classes.topicList}>
        {topics.map((item: any, index: number) => (
          <li key={index.toString()}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

TopicList.propTypes = {
  t: PropTypes.func.isRequired
};

export default TopicList;
