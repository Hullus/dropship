import './Product.css';
import {useState} from "react";
import {Grid} from "@material-ui/core";


function Product({
                     id,
                     image,
                     title,
                     price,
                     selected,
                     handleSelect,
                     selectedProducts,
                     checked,
                     handleClick,
                     cost,
                     profit
                 }) {


    return (
        <Grid
            item
            md={4} lg={3} xl={2}>
            <div
                className={`Product ${selectedProducts.includes(id) ? "Product__hover--active" : ""}`}>
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
                        onClick={() => handleClick(id)}
                    />
                </div>
                <div className={"Product__name"}>
                    <p className={"Product__name__text"}>{title}</p>
                </div>
                <div className={"Product__supplier"}>
                    <p>By: dropShip industries</p>
                </div>
                <div className={"Product__prices"}>
                    <ul className={"Prices__list"}>
                        <li><span className={"Price__number"}>${price}  </span><span
                            className={"Price__text"}>RRP</span></li>
                        <li><span className={"Price__number"}>${cost}</span> <span className={"Price__text"}>COST</span>
                        </li>
                        <li><span className={"Price__number"}>{profit}%</span> <span
                            className={"Price__text--blue"}>PROFIT</span></li>
                    </ul>
                </div>
            </div>
        </Grid>
    );
}

export default Product;