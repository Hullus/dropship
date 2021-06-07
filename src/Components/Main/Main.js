import './Main.css';

import Catalog from "./Catalog/Catalog";
import Sidebar from "./Sidebar/Sidebar";

import {useState,useEffect} from "react";
import {getProducts} from "./Catalog/DataRetriver";

function Main () {


    return (
        <div className="Main">
            <Sidebar />
            <Catalog />
        </div>
    );
}

export default Main;