import './Main.css';

import Catalog from "./Catalog/Catalog";
import Sidebar from "./Sidebar/Sidebar";


import {useState} from "react";

function Main () {


    return (
        <div className="Main">
            <Sidebar
            className = "Sidebar"
            />
            <Catalog
            className = "Catalog"
            />
        </div>
    );
}

export default Main;