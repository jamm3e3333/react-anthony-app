import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalContent = props => {
    return <div className={classes['modal__error']}>{props.children}</div>
}

const Modal = props => {
    
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, document.querySelector('#modal__error') )}
        </Fragment>
    )
}

export default Modal;