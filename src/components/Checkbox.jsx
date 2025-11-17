import { forwardRef } from 'react';

const Checkbox = forwardRef(({
  label,
  description,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className={className}>
      <div className="flex items-start">
        <div className="flex items-center h-6">
          <input
            ref={ref}
            type="checkbox"
            className={`w-5 h-5 rounded transition-all duration-200 cursor-pointer
              ${error
                ? 'border-red-500 text-red-600 focus:ring-red-500'
                : 'border-gray-300 text-solar-600 focus:ring-solar-500'
              }
              focus:ring-2 focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              hover:border-solar-400
            `}
            {...props}
          />
        </div>

        {(label || description) && (
          <div className="ml-3 flex-1">
            {label && (
              <label
                htmlFor={props.id}
                className={`block font-medium cursor-pointer
                  ${error ? 'text-red-700' : 'text-gray-700'}
                  ${props.disabled ? 'cursor-not-allowed opacity-50' : ''}
                `}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={`text-sm mt-1
                ${error ? 'text-red-600' : 'text-gray-500'}
                ${props.disabled ? 'opacity-50' : ''}
              `}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1 ml-8">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
