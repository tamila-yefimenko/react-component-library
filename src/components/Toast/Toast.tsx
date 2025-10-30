import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const typeStyles: Record<ToastType, string> = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  warning: 'bg-yellow-500 text-white',
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  showCloseButton = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 10);

    const hideTimeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        onClose?.();
      }, 300);
    }, duration);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [duration, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-xs w-full rounded-lg shadow-lg p-4 flex items-center justify-between
        transform transition-all duration-300 ease-in-out
        ${typeStyles[type]}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <span>{message}</span>
      {showCloseButton && (
        <button
          onClick={() => {
            setVisible(false);
            setTimeout(() => {
              setShouldRender(false);
              onClose?.();
            }, 300);
          }}
          className="ml-3 text-white/80 hover:text-white transition-colors"
        >
          <IoClose size={18} />
        </button>
      )}
    </div>
  );
};

export default Toast;
