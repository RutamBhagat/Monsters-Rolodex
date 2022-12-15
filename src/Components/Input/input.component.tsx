import React, { ChangeEvent } from "react";

type InputProps = {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string;
};

const Input = ({ onInputChange, placeholder } : InputProps) => {
  return (
    <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end">
      <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
        <input
          onChange={onInputChange}
          placeholder={placeholder}
          type="search"
          id="footer-field"
          name="footer-field"
          className="w-full bg-gray-500 mb-12 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Input;
