import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/standard-button';

import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTransition,
} from '@atlaskit/modal-dialog';


export default function InsuranceUpdate(props) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    return (
        <>
            <Button appearance="primary" onClick={openModal}>
                Update here
            </Button>

            <ModalTransition>
                {isOpen && (
                    <Modal onClose={closeModal}>
                        <ModalHeader>
                            <ModalTitle appearance="warning">
                                Update the customer and insurance data here
                            </ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <p>{props.data.Customer_id}</p>

                        </ModalBody>

                        <ModalFooter>
                            <Button appearance="subtle">Cancel</Button>
                            <Button appearance="warning" onClick={closeModal} autoFocus>
                                Delete
                            </Button>
                        </ModalFooter>
                    </Modal>
                )}
            </ModalTransition>
        </>
    );
}