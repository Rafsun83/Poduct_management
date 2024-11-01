interface CloseProps {
    /**
     * Defines the modal should be hidden
     */
    onClose: () => void;
  }
  
  const ModalCloseIcon = ({ onClose }: CloseProps) => {
    return (
      <span className="modal-close" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    );
  };
  
  export default ModalCloseIcon;
  