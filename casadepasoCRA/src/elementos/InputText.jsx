import React from 'react';

const InputText = ({onChange, value, placeholder, claseCSS}) => {
  return (
    <input 
      className={`border-inputs py-[7px] px-2 border rounded-md outline-none w-full ${claseCSS}`}
      type="text" 
      onChange={onChange} 
      value={value} 
      placeholder={placeholder}
    />
  );
}
 
export default InputText;