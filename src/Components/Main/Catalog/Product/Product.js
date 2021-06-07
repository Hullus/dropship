import './Product.css';
import {useState} from "react";

function Product({id, image, title, price, description}) {


    return (
        <div className="Product">
            <div className={"Product__profile"}>
                <img src={image} className={"Product__image"} alt="Product image"/>
            </div>
            <div className={"Product__name"}>
                <p>{title}</p>
            </div>
            <div className={"Product__supplier"}>
                <p>By: dropShip industries</p>
            </div>
            <div className={"Product__prices"}>
                <ul className={"Prices__list"}>
                    <li>$ ${price}RRP</li>
                    <li>$69 COST</li>
                    <li>$420%{69} PROFIT</li>
                </ul>
            </div>
        </div>
    );
}

export default Product;