import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'react-i18next';
import navMenu from '../data/single';
import useClasses from '../../../customClasses';


const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MixedNav(props: any) {
  const {
    menuPrimary,
    singleNav,
    t
  } = props;

  return (
    <Scrollspy
      items={navMenu}
      currentClassName="active"
    >
      {menuPrimary.map(item => (
        <li key={item.id.toString()}>
          {singleNav ? (
            <Button component={AnchorLink} offset={() => 100} href={item.url}>
              {t('starter-landing:header_' + item.name)}
            </Button>
          ) : (
            <Button href={'/' + item.url}>
              {t('starter-landing:header_' + item.name)}
            </Button>
          )}
        </li>
      ))}
    </Scrollspy>
  );
}

MixedNav.propTypes = {
  menuPrimary: PropTypes.array.isRequired,
  singleNav: PropTypes.bool,
  t: PropTypes.func.isRequired
};

MixedNav.defaultProps = {
  singleNav: false
};

MixedNav.getInitialProps = async () => ({
  namespacesRequired: ['common', 'starter-landing'],
});

export default MixedNav;
