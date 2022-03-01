import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';

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

                                <div className='insurance-label'><label>Customer ID</label></div><div className='insurance-inputs'><label>{props.data['Customer_id'] }</label></div>
                                <div className='insurance-label'><label>Gender</label></div><div className='insurance-inputs'><label>{props.data['Customer_Gender']}</label></div>
                                <div className='insurance-label'><label>Income group</label></div><div className='insurance-inputs'><Textfield value={props.data['Customer_Income group']}/></div>
                                <div className='insurance-label'><label>Region</label></div><div className='insurance-inputs'><Textfield value={props.data['Customer_Region']}/></div>
                                <div className='insurance-label'><label>Marital status</label></div><div className='insurance-inputs'><Textfield value={props.data['Customer_Marital_status']}/></div>
                                <div className='insurance-label'><label>Policy ID</label></div><div className='insurance-inputs'><label>{props.data['Policy_id']}</label></div>
                                <div className='insurance-label'><label>Date of purchase</label></div><div className='insurance-inputs'><Textfield value={props.data['Date of Purchase']}/></div>
                                <div className='insurance-label'><label>Fuel</label></div><div className='insurance-inputs'><Textfield value={props.data['Fuel']}/></div>
                                <div className='insurance-label'><label>Vehicle Segment</label></div><div className='insurance-inputs'><Textfield value={props.data['VEHICLE_SEGMENT']}/></div>
                                <div className='insurance-label'><label>Premium</label></div><div className='insurance-inputs'><Textfield value={props.data['Premium']}/></div>
                                <div className='insurance-label'><label>Bodily injury liability</label></div><div className='insurance-inputs'><Textfield value={props.data['bodily injury liability']}/></div>
                                <div className='insurance-label'><label>Personal injury protection</label></div><div className='insurance-inputs'><Textfield value={props.data['personal injury protection']}/></div>
                                <div className='insurance-label'><label>Property damage liability</label></div><div className='insurance-inputs'><Textfield value={props.data['property damage liability']}/></div>
                                <div className='insurance-label'><label>Collision</label></div><div className='insurance-inputs'><Textfield value={props.data['collision']}/></div>
                                <div className='insurance-label'><label>Comprehensive</label></div><div className='insurance-inputs'><Textfield value={props.data['comprehensive']}/></div>
                            
                            

                        </ModalBody>

                        <ModalFooter>
                            {/* <Button appearance="subtle">Cancel</Button> */}
                            <Button appearance="warning" onClick={closeModal} autoFocus>
                            Update
                            </Button>
                        </ModalFooter>
                    </Modal>
                )}
            </ModalTransition>
        </>
    );
}