import './Main.css';

import Catalog from "./Catalog/Catalog";
import Sidebar from "./Sidebar/Sidebar";


import {useState} from "react";

function Main () {


    return (
        <div className="Main">
            <Sidebar />
            <Catalog
            />
        </div>
    );
}

export default Main;