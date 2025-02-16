import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <span className="form-group">
      <label >{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </span>
  );
};


const Button = ({ label, type }) => {
    return (
      <button type={type} className="submit-button">
        {label}
      </button>
    );
  };
  
  const CheckBox = ({ label, checked, onChange }) => {
    return (
        <div className="checkbox-group">
        <input type="checkbox" id="agree" checked={checked} onChange={onChange} />
        <label htmlFor="agree">
          {" "}
          {label}
        </label>
      </div>
    );
  };
  
 
export {InputField, Button,CheckBox};