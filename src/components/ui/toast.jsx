import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ToastContext = React.createContext({});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((toast) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, ...toast }]);

    if (toast.duration !== Infinity) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, toast.duration || 5000);
    }

    return id;
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

function Toast({ title, description, variant = "default", onClose }) {
  const variantStyles = {
    default: "bg-white border-gray-200",
    success: "bg-success-50 border-success-200",
    error: "bg-error-50 border-error-200",
    warning: "bg-warning-50 border-warning-200",
  };

  const iconColors = {
    default: "text-solar-600",
    success: "text-success-600",
    error: "text-error-600",
    warning: "text-warning-600",
  };

  return (
    <div
      className={cn(
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-lg transition-all animate-in slide-in-from-right",
        variantStyles[variant]
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-1">
            {title && (
              <p className={cn("text-sm font-medium", iconColors[variant])}>
                {title}
              </p>
            )}
            {description && (
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className={cn(
              "ml-4 inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2",
              iconColors[variant]
            )}
          >
            <span className="sr-only">Close</span>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { Toast };
