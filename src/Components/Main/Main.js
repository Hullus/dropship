import './Main.css';

import Catalog from "./Catalog/Catalog";
import Sidebar from "./Sidebar/Sidebar";
import Product from "./Catalog/Product/Product";
import {Modal} from "@material-ui/core";

import {useState} from "react";
import ModalBody from "./Modal/ModalBody";

function Main () {

    const [open, setOpen] = useState(false);


    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="Main">
            <Modal
                open = {open}
                onClose = {handleClose}
                className={"Modal"}
            >
                <ModalBody />
            </Modal>
            <Sidebar />
            <Catalog
                handleClick={handleClick}
            />
        </div>
    );
}

export default Main;