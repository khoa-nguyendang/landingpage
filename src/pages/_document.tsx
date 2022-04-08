import { Html } from '@mui/icons-material';
import React from 'react';
import HeadComponent from '../components/head';
import Main from '../components/Header/Main';

class MyDocument extends Document {
    constructor(private props: any) {
        super();
    }
  render() {
    return (
      <Html lang="en" dir="ltr" {...this.props}>
        <HeadComponent />
        <body>
          <div
            id="preloader"
            style={{
              position: 'fixed',
              zIndex: 10000,
              background: '#fafafa',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              style={{
                opacity: 0.2,
                position: 'fixed',
                top: 'calc(50% - 50px)',
                left: 'calc(50% - 50px)'
              }}
              src="/images/preloader.gif"
              alt="loading"
            />
          </div>
          <Main {...this.props}/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
