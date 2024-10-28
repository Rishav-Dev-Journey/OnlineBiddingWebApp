import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '44px')};
  padding: 11px 24px;
  gap: 0px;
  border-radius: 4px 0px 0px 0px;
  opacity: 1;
  background: linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%);
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ButtonText = styled.span`
  width: 55px;
  height: 22px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.86px;
  text-align: center;
  color: #FFFFFF;
  opacity: 1;
`;

const CommonButton = ({ width, height, text, onClick }) => {
  return (
    <Button width={width} height={height} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default CommonButton;