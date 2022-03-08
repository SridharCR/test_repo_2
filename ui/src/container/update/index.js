import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/standard-button';
import Textfield from '@atlaskit/textfield';
import{ INSURANCE_URL} from '../../configs/config'

import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

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
    const [input_customer_id, setInputCustomerId] = useState(props.data['Customer_id']);
    const [input_gender, setInputGender] = useState(undefined);
    const [input_income, setInputIncome] = useState(undefined);
    const [input_region, setInputRegion] = useState(undefined);
    const [input_mstatus, setInputMstatus] = useState(undefined);
    const [input_policy_id, setInputPolicyId] = useState(props.data['Policy_id']);
    const [input_dop, setInputDop] = useState(undefined);
    const [input_fuel, setInputFuel] = useState(undefined);
    const [input_vehicle, setInputVehicle] = useState(undefined);
    const [input_premium, setInputPremium] = useState(undefined);
    const [input_body, setInputBody] = useState(undefined);
    const [input_personal, setInputPersonal] = useState(undefined);
    const [input_property, setInputProperty] = useState(undefined);
    const [input_collision, setInputCollision] = useState(undefined);
    const [input_comp, setInputComp] = useState(undefined);

    const dataValues = {
        Customer_Gender: input_gender, "Customer_Income group": input_income, Customer_Region: input_region, Customer_Marital_status: input_mstatus, "Date of Purchase": input_dop, Fuel: input_fuel,
        VEHICLE_SEGMENT: input_vehicle, Premium: input_premium, "bodily injury liability": input_body, "personal injury protection": input_personal, "property damage liability": input_property, collision: input_collision, comprehensive: input_comp
    };

    const onClickMethod = () => {
        updateData()
        closeModal()
    }

    const updateData = () => {
        let valuesToBeUpdated = { Customer_id: input_customer_id, Policy_id: input_policy_id }
        for (let key in dataValues) {
            if (dataValues[key]) {
                valuesToBeUpdated[key] = dataValues[key]
            }
        }
        console.log("sridhar update values", valuesToBeUpdated)
        axios.put(INSURANCE_URL, valuesToBeUpdated).then((e) => { console.log(e), props.handler(props.pagination[0], props.pagination[1]) })
    }

    return (
        <>
            <EditIcon onClick={openModal} style={{ cursor: 'pointer' }}>
                Update here
            </EditIcon>

            <ModalTransition>
                {isOpen && (
                    <Modal onClose={closeModal}>
                        <ModalHeader>
                            <ModalTitle appearance="warning">
                                Update the customer and insurance data here
                            </ModalTitle>
                        </ModalHeader>
                        {props.data && (
                            <ModalBody>
                                <div className='insurance-label'><label>Customer ID</label></div><div className='insurance-inputs'><Textfield name="basic" aria-label="default text field" value={typeof (input_customer_id) === "undefined" ? props.data.Customer_id : input_customer_id} onInput={e => setInputCustomerId(e.target.value)} disabled /></div>
                                <div className='insurance-label'><label>Gender</label></div><div className='insurance-inputs'><Textfield value={typeof (input_gender) === "undefined" ? props.data['Customer_Gender'] : input_gender} onInput={e => setInputGender(e.target.value)} /></div>
                                <div className='insurance-label'><label>Income group</label></div><div className='insurance-inputs'><Textfield value={typeof (input_income) === "undefined" ? props.data['Customer_Income group'] : input_income} onInput={e => setInputIncome(e.target.value)} /></div>
                                <div className='insurance-label'><label>Region</label></div><div className='insurance-inputs'><Textfield value={typeof (input_region) === "undefined" ? props.data['Customer_Region'] : input_region} onInput={e => setInputRegion(e.target.value)} /></div>
                                <div className='insurance-label'><label>Marital status</label></div><div className='insurance-inputs'><Textfield value={typeof (input_mstatus) === "undefined" ? props.data['Customer_Marital_status'] : input_mstatus} onInput={e => setInputMstatus(e.target.value)} /></div>
                                <div className='insurance-label'><label>Policy ID</label></div><div className='insurance-inputs'><Textfield value={typeof (input_policy_id) === "undefined" ? props.data['Policy_id'] : input_policy_id} onInput={e => setInputPolicyId(e.target.value)} /></div>
                                <div className='insurance-label'><label>Date of purchase</label></div><div className='insurance-inputs'><Textfield value={typeof (input_dop) === "undefined" ? props.data['Date of Purchase'] : input_dop || props.data['Date of Purchase']} onInput={e => setInputDop(e.target.value)} /></div>
                                <div className='insurance-label'><label>Fuel</label></div><div className='insurance-inputs'><Textfield value={typeof (input_fuel) === "undefined" ? props.data['Fuel'] : input_fuel} onInput={e => setInputFuel(e.target.value)} /></div>
                                <div className='insurance-label'><label>Vehicle Segment</label></div><div className='insurance-inputs'><Textfield value={typeof (input_vehicle) === "undefined" ? props.data['VEHICLE_SEGMENT'] : input_vehicle} onInput={e => setInputVehicle(e.target.value)} /></div>
                                <div className='insurance-label'><label>Premium</label></div><div className='insurance-inputs'><Textfield value={typeof (input_premium) === "undefined" ? props.data['Premium'] : input_premium} onInput={e => setInputPremium(e.target.value)} /></div>
                                <div className='insurance-label'><label>Bodily injury liability</label></div><div className='insurance-inputs'><Textfield value={typeof (input_body) === "undefined" ? props.data['bodily injury liability'] : input_body} onInput={e => setInputBody(e.target.value)} /></div>
                                <div className='insurance-label'><label>Personal injury protection</label></div><div className='insurance-inputs'><Textfield value={typeof (input_personal) === "undefined" ? props.data['personal injury protection'] : input_personal} onInput={e => setInputPersonal(e.target.value)} /></div>
                                <div className='insurance-label'><label>Property damage liability</label></div><div className='insurance-inputs'><Textfield value={typeof (input_property) === "undefined" ? props.data['property damage liability'] : input_property} onInput={e => setInputProperty(e.target.value)} /></div>
                                <div className='insurance-label'><label>Collision</label></div><div className='insurance-inputs'><Textfield value={typeof (input_collision) === "undefined" ? props.data['collision'] : input_collision} onInput={e => setInputCollision(e.target.value)} /></div>
                                <div className='insurance-label'><label>Comprehensive</label></div><div className='insurance-inputs'><Textfield value={typeof (input_comp) === "undefined" ? props.data['comprehensive'] : input_comp} onInput={e => setInputComp(e.target.value)} /></div>
                            </ModalBody>
                        )}

                        <ModalFooter>
                            <Button appearance="primary" onClick={onClickMethod} autoFocus>
                                Update
                            </Button>
                        </ModalFooter>
                    </Modal>
                )}
            </ModalTransition>
        </>
    );
}