import './Product.css';
import {useState} from "react";

function Product({id, image, title, price, description, selected, handleSelect, selectedProducts, checked, handleClick}) {


    return (
        <div className={`Product ${selectedProducts.includes(id) ? "Product__hover--active" : ""}`}>
            <div className={`Product__hover ${selectedProducts.includes(id) ? "Product__hover--active" : ""}`}>
                <input
                    type={"checkbox"}
                    className={"Product__checkbox"}
                    onChange={() => handleSelect(id)}
                    value={selected}
                    checked={checked}
                />
                <button>Add to Inventory</button>
            </div>
            <div className={"Product__profile"}>
                <img
                    src={image}
                    className={"Product__image"}
                    alt="Product image"
                    onClick={handleClick}
                />
            </div>
            <div className={"Product__name"}>
                <p>{title}</p>
            </div>
            <div className={"Product__supplier"}>
                <p>By: dropShip industries</p>
            </div>
            <div className={"Product__prices"}>
                <ul className={"Prices__list"}>
                    <li>${price}RRP</li>
                </ul>
            </div>
        </div>
    );
}

export default Product;