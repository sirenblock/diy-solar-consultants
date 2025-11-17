import { forwardRef } from 'react';
import { Check, AlertCircle } from 'lucide-react';

const Input = forwardRef(({
  label,
  error,
  success,
  helperText,
  className = '',
  ...props
}, ref) => {
  const hasValue = props.value && props.value.toString().length > 0;

  return (
    <div className="relative">
      <input
        ref={ref}
        className={`w-full h-12 px-4 pt-6 pb-2 border-2 rounded-lg transition-all duration-200
          ${error
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
            : success
              ? 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200'
              : 'border-gray-300 focus:border-solar-500 focus:ring-2 focus:ring-solar-200'
          }
          focus:outline-none
          peer
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          ${className}`}
        placeholder=" "
        {...props}
      />

      {/* Floating Label */}
      <label
        htmlFor={props.id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none
          ${hasValue || props.placeholder === ' '
            ? 'top-2 text-xs'
            : 'top-3.5 text-base'
          }
          peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-500
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

      {/* Success Checkmark Icon */}
      {success && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Check className="w-5 h-5 text-green-500" />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
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

Input.displayName = 'Input';

export default Input;
