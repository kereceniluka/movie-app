import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledModal } from './ModalStyle';

// bootstrap
import { Modal as ModalB } from 'react-bootstrap';

// actions
import { closeModal } from '../../actions/trailerModal';

const Modal = ({ children }) => {

    const dispatch = useDispatch();
    const { showModal, selectedMovie: { title } } = useSelector(state => state.trailerModal);

    const handleClose = () => {
        dispatch(closeModal());
    }

    return (
        <StyledModal show={showModal} onHide={handleClose} size="xl" centered>
            <ModalB.Header closeButton>
                <ModalB.Title>{title}</ModalB.Title>
            </ModalB.Header>
            <ModalB.Body>
                {children}
            </ModalB.Body>
        </StyledModal>
    );
}

export default Modal;
