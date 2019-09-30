import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import {
  Container,
  Input as StyledInput,
  IconContainer,
  Error,
} from './styles';

import Icon from '../Icon';

export default function Input({ icon, isUnformComponent, name, ...restProps }) {
  const ref = useRef();
  const field = useField(name);

  useEffect(() => {
    if (isUnformComponent && ref.current) {
      field.registerField({
        name: field.fieldName,
        ref: ref.current,
        path: 'value',
      });
    }
  }, [ref, field.fieldName, isUnformComponent]); // eslint-disable-line

  function focusInput() {
    ref.current.focus();
  }

  return (
    <>
      <Container>
        {icon && (
          <IconContainer onClick={focusInput}>
            <Icon name={icon} />
          </IconContainer>
        )}
        <StyledInput
          ref={ref}
          {...restProps}
          defaultValue={field.defaultValue}
        />
      </Container>
      {field.error && <Error>{field.error}</Error>}
    </>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  isUnformComponent: PropTypes.bool,
};

Input.defaultProps = {
  icon: null,
  isUnformComponent: false,
};
