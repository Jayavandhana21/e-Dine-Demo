import React, { useEffect } from 'react';

// Define the prop types
interface DialogProps {
    isOpen: boolean; // Determines whether the dialog is visible
    onClose: () => void; // Callback to close the dialog
    className?: string; // Custom class name for the popup
    bodyOpenClassName?: string; // Class name applied to the <body> when dialog is open
    children: React.ReactNode; // Content inside the dialog
  }

  const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    className = '',
    bodyOpenClassName = '',
    children,
  }) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen && bodyOpenClassName) {
      document.body.classList.add(bodyOpenClassName);
    } else if (bodyOpenClassName) {
      document.body.classList.remove(bodyOpenClassName);
    }

    // Cleanup to ensure the class is removed if the component is unmounted
    return () => {
      if (bodyOpenClassName) {
        document.body.classList.remove(bodyOpenClassName);
      }
    };
  }, [isOpen, bodyOpenClassName]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className}`}
      onClick={onClose} // Close dialog when clicking outside content
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        {children}
      </div>
    </div>
  );
}

export default Dialog;