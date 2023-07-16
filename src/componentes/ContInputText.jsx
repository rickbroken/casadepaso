import React from 'react';
import InputText from '../elementos/inputText';

const ContInputText = ({onChange, value, name, placeholder}) => {
  return (
    <div>
      <p>{name}</p>
      <InputText
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
 
export default ContInputText;