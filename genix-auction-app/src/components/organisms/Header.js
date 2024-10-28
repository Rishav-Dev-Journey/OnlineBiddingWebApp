// Header.js
import React from 'react';
import styled from 'styled-components';
import { VectorLogo } from '../../assets/icons/icons';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Full width for responsiveness */
  padding: 16px 128px 0px 128px;
  background-color: ${({ bgColor }) => bgColor || '#FFFFFF'};
  box-sizing: border-box;
`;

const HeaderInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoText = styled.span`
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 40.98px;
  text-align: left;
  color: ${({ textColor }) => textColor || '#191D23'};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1D4ED8;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const Dropdown = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Manrope', sans-serif;
`;

const Header = ({ bgColor, textColor, buttonText, dropdownOptions, onButtonClick }) => {
  return (
    <HeaderContainer bgColor={bgColor}>
      <HeaderInnerContainer>
        {/* Logo and Text */}
        <LogoContainer>
          <VectorLogo />
          <LogoText textColor={textColor}>Genix Auctions</LogoText>
        </LogoContainer>

        {/* Additional Elements */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {dropdownOptions && (
            <Dropdown>
              {dropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Dropdown>
          )}
          {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
        </div>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

export default Header;