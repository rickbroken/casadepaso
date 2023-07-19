import React from 'react';
import InputText from './../elementos/InputText';

const ContInputText = ({onChange, value, name, placeholder}) => {
  return (
    <div className='pr-2'>
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