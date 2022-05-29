import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const FlagMessage = ({
  children,
  success = false,
  icon = false,
  number = false,
}) => {
  return (
    <Styled.Container success={success} icon={icon} number={number}>
      {children}
    </Styled.Container>
  );
};

FlagMessage.propTypes = {
  children: P.node,
  success: P.bool,
  icon: P.bool,
  number: P.bool,
};
