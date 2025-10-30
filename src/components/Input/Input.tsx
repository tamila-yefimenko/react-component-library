import React, { useState, forwardRef, InputHTMLAttributes } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  clearable?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', clearable, value, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(prev => !prev);

    const handleClearInput = () => {
      if (onChange) {
        const event = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const isPassword = type === 'password';
    const isNumber = type === 'number';
    const inputType = isPassword && showPassword ? 'text' : type;
    const showClear = clearable && value;

    const inputId = label
      ? `input-${label.replace(/\s+/g, '-').toLowerCase()}`
      : undefined;

    const inputPaddingRight = 'pr-8';

    return (
      <div className="flex flex-col gap-1 text-gray-900 w-full max-w-sm">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          <input
            id={inputId}
            ref={ref}
            type={inputType}
            value={value}
            onChange={onChange}
            className={`w-full border border-gray-300 rounded-lg py-2 px-3 ${inputPaddingRight} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-2 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPassword ? (
                <FaRegEyeSlash size={18} />
              ) : (
                <FaRegEye size={18} />
              )}
            </button>
          )}

          {showClear && (isPassword || !isNumber) && (
            <button
              type="button"
              onClick={handleClearInput}
              className="absolute text-gray-500 hover:text-gray-700"
              tabIndex={-1}
              style={{ right: isPassword ? 36 : 8 }}
            >
              <IoClose size={18} />
            </button>
          )}

          {showClear && isNumber && (
            <button
              type="button"
              onClick={handleClearInput}
              className="absolute text-gray-500 hover:text-gray-700"
              tabIndex={-1}
              style={{ right: 8 }}
            >
              <IoClose size={18} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
