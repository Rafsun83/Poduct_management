import React from "react";
import Modal from "../../component/Modal";
import ModalCloseIcon from "../../component/Modal/ModalClose";

interface Props {
    isModalOpen?: boolean;
    openModalhandaler?: () => void;
    form?: any;
    title?: string;
}

const CustomModal = ({isModalOpen = false, openModalhandaler = () =>{}, form, title }:Props) => {
    return (
        <div>
            <Modal isOpen={isModalOpen} disableOutsideClick animation={"fade"}>
                <Modal.Header>
                    <h4>{title}</h4>
                    <ModalCloseIcon onClose={openModalhandaler} />
                </Modal.Header>
                <Modal.Body>
                    {form}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CustomModal;
