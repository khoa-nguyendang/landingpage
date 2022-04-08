import React from 'react';
import Box from '@mui/material/Box';
import ProfileWidget from './ProfileWidget';
import SubscribeWidget from './SubscribeWidget';
import PostWidget from './PostWidget';
import CommentWidget from './CommentWidget';
import ListWidget from './ListWidget';
import GalleryWidget from './GalleryWidget';
0938996246
0978048379

function Sidebar(props: any) {
  return (
    <div>
      <SubscribeWidget {...props}/>
      <Box py={3} />
      <ProfileWidget  {...props}/>
      <Box py={3} />
      <PostWidget  {...props}/>
      <Box py={3} />
      <CommentWidget  {...props}/>
      <Box py={3} />
      <ListWidget  {...props}/>
      <Box py={3} />
      <GalleryWidget  {...props}/>
    </div>
  );
}

export default Sidebar;
