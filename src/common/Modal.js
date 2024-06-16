import React from 'react';
import '../css/modal.css'; 

const Modal = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal ${className}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
}

export default Modal;
