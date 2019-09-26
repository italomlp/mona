import React from 'react';
import * as FeatherIcons from 'react-icons/fi';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Icon({ name, onClick, ...props }) {
  const FiIcon = FeatherIcons[name];
  const cursor = onClick ? 'pointer' : 'inherit';
  return <FiIcon style={{ cursor }} {...props} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
