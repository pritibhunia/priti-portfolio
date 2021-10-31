import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import Overlay from './Overlay';

const Modal = ({ allowMax, allowClose, title, onClose, children }) => {
    const [isMax, setMax] = useState(false);
    let modalRoot = document.getElementById('modal-root');
    if (modalRoot == null) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        modalRoot.classList.add(classes.modal__root);
        document.body.appendChild(modalRoot);
    }
    const maximizeModal = () => {
        setMax((prevState) => !prevState);
    }

    const BuildHeader = () => {
        return (
            <Modal.Header>
                {title && <div className={classes.Modal__header__title}>{title}</div>}
                {(allowClose || allowMax) && <div className={classes.Modal__header__action}>
                    {allowMax && <button type="button" onClick={maximizeModal}>
                        {isMax ?
                            <i className="bi bi-arrows-angle-contract lead"></i> :
                            <i className="bi bi-arrows-angle-expand lead"></i>}
                    </button>}
                    {allowClose && <button type="button" aria-label="Close" onClick={onClose}>
                        <i className="bi bi-x-lg lead"></i>
                    </button>}
                </div>}
            </Modal.Header>
        );
    }

    return ReactDOM.createPortal(
        <>
            <Overlay></Overlay>
            <div className={`${classes.Modal} ani-slideIn-down ${isMax ? classes.maximize : ''}`}>
                {title && BuildHeader()}
                {children}
            </div>
        </>,
        modalRoot
    )
}

Modal.propTypes = {
    allowClose: PropTypes.bool,
    allowMax: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func
}

Modal.defaultProps = {
    allowClose: true,
    allowMax: false,
    title: undefined,
    onClose: () => { }
}

Modal.Header = ({ children, className }) => {
    return (
        <div className={`${classes.Modal__header} ${className}`}>
            {children}
        </div>
    );
}

Modal.Body = ({ className, children }) => {
    return (
        <div className={`${classes.Modal__footer} ${className}`}>
            {children}
        </div>
    );
}

Modal.Body = ({ className, children }) => {
    return (
        <div className={`${classes.Modal__body} ${className}`}>
            {children}
        </div>
    );
}


export default Modal
