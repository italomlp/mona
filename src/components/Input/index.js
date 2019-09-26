import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, Input as StyledInput, IconContainer } from './styles';

import Icon from '../Icon';

export default function Input({ icon = null, ...restProps }) {
  const ref = useRef();

  function focusInput() {
    ref.current.focus();
  }

  return (
    <Container>
      {icon && (
        <IconContainer onClick={focusInput}>
          <Icon name={icon} />
        </IconContainer>
      )}
      <StyledInput ref={ref} {...restProps} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
};
