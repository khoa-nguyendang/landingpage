import React from 'react';
import Box from '@mui/material/Box';
import PeopleWidget from './PeopleWidget';
import TrendingWidget from './TrendingWidget';
import NewsWidget from './NewsWidget';
import ImageWidget from './ImageWidget';
import ProductWidget from './ProductWidget';
import HelperWidget from './HelperWidget';

function Sidebar(props: any) {
  return (
    <Box>
      <ProductWidget {...props}/>
      <Box py={3} />
      <PeopleWidget  {...props}/>
      <Box py={3} />
      <NewsWidget  {...props}/>
      <Box py={3} />
      <TrendingWidget />
      <Box py={3} />
      <ImageWidget  {...props}/>
      <Box py={3} />
      <HelperWidget  {...props}/>
    </Box>
  );
}

export default Sidebar;
