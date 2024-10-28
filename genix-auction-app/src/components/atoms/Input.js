// Input.js

import React from 'react';
import { PlusIcon, MinusIcon } from '../../assets/icons/icons';

const Input = ({
  label,
  value,
  onChange,
  withCounter = false,
  onIncrement,
  onDecrement,
  ...props
}) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '392px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const labelStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '19.12px',
    textAlign: 'left',
    color: '#191D23',
  };

  const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '4px',
    border: '1.5px solid #64748B',
  };

  const inputBoxStyle = {
    flex: 1,
    height: '40px',
    padding: '8px 12px',
    border: 'none',
    fontSize: '14px',
    outline: 'none',
  };

  const counterStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '8px',
    paddingRight: '12px',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <div style={wrapperStyle}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          style={inputBoxStyle}
          {...props}
        />
        {withCounter && (
          <div style={counterStyle}>
            <button type="button" onClick={onDecrement} style={buttonStyle}>
              <MinusIcon style={iconStyle} />
            </button>
            <button type="button" onClick={onIncrement} style={buttonStyle}>
              <PlusIcon style={iconStyle} />
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;