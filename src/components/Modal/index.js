import { useDispatch, useSelector } from 'react-redux';

// bootstrap
import { Modal as StyledModal } from 'react-bootstrap';

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
            <StyledModal.Header closeButton>
                <StyledModal.Title>{title}</StyledModal.Title>
            </StyledModal.Header>
            <StyledModal.Body>
                {children}
            </StyledModal.Body>
        </StyledModal>
    );
}

export default Modal;
