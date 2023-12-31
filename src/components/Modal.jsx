import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modal = ({ items }) {
    return ({
        items.map((modalItems) => {
            const { id, price, img, title } = modalItems;
            return (
                <div key={id}
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {img}
                        </Modal.Body>
                        <Modal.Footer>
                            <h6> Price S/.{price}</h6>
                            <Button variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

            )
        })
    }
    )
}

export default Modal