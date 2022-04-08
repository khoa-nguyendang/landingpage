import React, { useReducer, useState } from 'react';
import uiState from '../../theme/config';
import PageNav from '../PageNav';
import Chat from '../Chat';

function Corner(props: any) {
  const [state] = useState(uiState);
  return (
    <div>
      { state.corner === 'chat' && <Chat /> }
      { state.corner === 'nav' && <PageNav {...props}/> }
    </div>
  );
}

export default Corner;
