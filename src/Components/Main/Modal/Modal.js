import "./Modal.css"

import ModalBody from "./ModalBody";
import {Modal} from "@material-ui/core";
import {useEffect, useState} from "react";
import axios from "axios";



function ModalMain ({modalID} ) {
    const [open, setOpen] = useState(false);
    const [modalItem, setModalItem] = useState([]);

    useEffect(() => {
        modalID &&
        axios.get(`https://fakestoreapi.com/products/${modalID}`)
            .then(res => {
                setModalItem(res.data);
                setOpen(true)
            })
    }, [modalID])

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <Modal
            open = {open}
            onClose = {handleClose}
            className={"Modal"}
        >
            <ModalBody
                image = {modalItem.image}
                title = {modalItem.title}
                description = {modalItem.description}
                id = {modalItem.id}
                price = {modalItem.price}
                handleClose = {handleClose}
            />
        </Modal>
        )
}

export default ModalMain