import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const FlagMessage = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

FlagMessage.propTypes = {
  children: P.node.isRequired,
};
