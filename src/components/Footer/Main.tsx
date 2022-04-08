import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import uiState from '../../theme/config';
import SiteMap from './SiteMap';
import Blog from './Blog';
import Contact from './Contact';
import Basic from './Basic';
import useClasses from '../../customClasses';

function reducer(state: {}, action: any) {
    switch (action.type) {
      case 'start':
        return { ...state, isRunning: true };
      case 'stop':
        return { ...state, isRunning: false };
      case 'reset':
        return { isRunning: false, time: 0 };
      default:
        throw new Error();
    }
  }

function Main(props: any) {
  const [state] = useState(uiState);
  const { toggleDir } = props;

  return (
    <div>
      { state.footer === 'basic' && <Basic {...props}/>}
      { state.footer === 'blog' && <Blog toggleDir={toggleDir} {...props}/>}
      { state.footer === 'contact' && <Contact {...props}/>}
      { state.footer === 'sitemap' && <SiteMap toggleDir={toggleDir} {...props}/>}
    </div>
  );
}

Main.propTypes = {
  toggleDir: PropTypes.func.isRequired
};

export default Main;
