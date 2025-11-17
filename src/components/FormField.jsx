import React, { useState, useEffect } from 'react';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  required = false,
  error = '',
  placeholder = '',
  autoFocus = false,
  className = '',
  ...props
}) {
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validate = (val) => {
    if (required && !val) return false;

    if (type === 'email' && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    }

    if (type === 'tel' && val) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(val.replace(/\D/g, ''));
    }

    if (type === 'text' && required && val) {
      return val.trim().length >= 2;
    }

    return true;
  };

  useEffect(() => {
    if (touched || value) {
      setIsValid(validate(value));
    }
  }, [value, touched]);

  const handleBlur = (e) => {
    setTouched(true);
    if (onBlur) {
      onBlur(e);
    }
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    let newValue = e.target.value;

    // Auto-format phone numbers
    if (type === 'tel') {
      newValue = formatPhoneNumber(newValue);
    }

    onChange({ target: { name, value: newValue } });
  };

  const showError = touched && !isValid && error;
  const showSuccess = touched && isValid && value && !error;

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`w-full px-4 py-3 min-h-[44px] border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-solar-500 focus:border-solar-500 ${
            showError
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : showSuccess
              ? 'border-green-500 focus:ring-green-500 focus:border-green-500'
              : 'border-gray-300'
          }`}
          {...props}
        />

        {/* Success Icon */}
        {showSuccess && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        {/* Error Icon */}
        {showError && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Error Message */}
      {showError && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}

      {/* Success Message */}
      {showSuccess && (
        <p className="mt-1 text-sm text-green-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Looks good!
        </p>
      )}
    </div>
  );
}
