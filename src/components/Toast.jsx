'use client';

import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

// Toast context for global access
const ToastContext = createContext(null);

// Toast types with corresponding styles and icons
const TOAST_TYPES = {
  success: {
    icon: CheckCircle,
    className: 'bg-green-50 border-green-200 text-green-800',
    iconClassName: 'text-green-500',
  },
  error: {
    icon: XCircle,
    className: 'bg-red-50 border-red-200 text-red-800',
    iconClassName: 'text-red-500',
  },
  warning: {
    icon: AlertCircle,
    className: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    iconClassName: 'text-yellow-500',
  },
  info: {
    icon: Info,
    className: 'bg-blue-50 border-blue-200 text-blue-800',
    iconClassName: 'text-blue-500',
  },
};

// Individual Toast component
function Toast({ id, type = 'info', title, message, duration = 5000, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const config = TOAST_TYPES[type] || TOAST_TYPES.info;
  const Icon = config.icon;

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300); // Match animation duration
  }, [id, onClose]);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setIsVisible(true));

    // Auto-dismiss after duration
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, handleClose]);

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`
        flex items-start gap-3 w-full max-w-sm p-4 border rounded-lg shadow-lg
        transition-all duration-300 ease-out
        ${config.className}
        ${isVisible && !isLeaving ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
      `}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconClassName}`} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold text-sm">{title}</p>
        )}
        {message && (
          <p className={`text-sm ${title ? 'mt-1 opacity-90' : ''}`}>{message}</p>
        )}
      </div>
      <button
        onClick={handleClose}
        className="flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// Toast container that renders all toasts
function ToastContainer({ toasts, removeToast }) {
  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} onClose={removeToast} />
        </div>
      ))}
    </div>
  );
}

// Toast Provider component
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((options) => {
    const id = Date.now() + Math.random();
    const toast = { id, ...options };
    setToasts((prev) => [...prev, toast]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Convenience methods
  const toast = useCallback((message, options = {}) => {
    return addToast({ message, ...options });
  }, [addToast]);

  toast.success = useCallback((message, options = {}) => {
    return addToast({ type: 'success', message, ...options });
  }, [addToast]);

  toast.error = useCallback((message, options = {}) => {
    return addToast({ type: 'error', message, ...options });
  }, [addToast]);

  toast.warning = useCallback((message, options = {}) => {
    return addToast({ type: 'warning', message, ...options });
  }, [addToast]);

  toast.info = useCallback((message, options = {}) => {
    return addToast({ type: 'info', message, ...options });
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ toast, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

// Hook to use toast from any component
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.toast;
}

export default Toast;
