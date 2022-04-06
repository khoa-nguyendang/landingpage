import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import useStyles from './title-style';
import useClasses from '../../customClasses';


export default function TitleSecondary(props: any) {
  const classes = useClasses(useStyles);
  const { children, align } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={clsx(classes.titleSecondary, setAlign(align))}>
      <Typography variant="h4">
        {children}
      </Typography>
    </div>
  );
}

TitleSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

TitleSecondary.defaultProps = {
  align: 'left'
};
