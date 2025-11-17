import { forwardRef } from 'react';

const Select = forwardRef(({
  label,
  error,
  success,
  helperText,
  children,
  className = '',
  ...props
}, ref) => {
  const hasValue = props.value && props.value.toString().length > 0;

  return (
    <div className="relative">
      <select
        ref={ref}
        className={`w-full h-12 px-4 pt-6 pb-2 pr-10 border-2 rounded-lg transition-all duration-200 appearance-none
          ${error
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
            : success
              ? 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200'
              : 'border-gray-300 focus:border-solar-500 focus:ring-2 focus:ring-solar-200'
          }
          focus:outline-none
          peer
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          ${!hasValue ? 'text-gray-500' : 'text-gray-900'}
          ${className}`}
        {...props}
      >
        {children}
      </select>

      {/* Floating Label */}
      <label
        htmlFor={props.id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none
          ${hasValue
            ? 'top-2 text-xs'
            : 'top-3.5 text-base'
          }
          peer-focus:top-2 peer-focus:text-xs
          ${error
            ? 'text-red-600 peer-focus:text-red-600'
            : success
              ? 'text-green-600 peer-focus:text-green-600'
              : 'text-gray-600 peer-focus:text-solar-600'
          }`}
      >
        {label}
      </label>

      {/* Dropdown Arrow Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className={`w-5 h-5 ${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Success Checkmark Icon (positioned before dropdown arrow) */}
      {success && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </p>
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <p className={`mt-2 text-sm ${success ? 'text-green-600' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
