import './Main.css';

import Catalog from "./Catalog/Catalog";
import Sidebar from "./Sidebar/Sidebar";
import Modal from "./Modal/Modal";

import {useState,useEffect} from "react";
import {getProducts} from "./Catalog/DataRetriver";

function Main () {
    const handleClick = () => {

    }

    return (
        <div className="Main">
            {/*<Modal />*/}
            <Sidebar />
            <Catalog
                handleClick={ handleClick()}
            />
        </div>
    );
}

export default Main;