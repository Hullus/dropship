import './Catalog.css';


import {useEffect, useState} from "react";
import {getCategories, getProducts} from "./DataRetriver";

import Product from "./Product/Product";
import Header from "./Header/Header";
import Sort from "../Util/Sort";
import {CircularProgress, Grid} from "@material-ui/core";
import ModalMain from "../Modal/Modal";


function Catalog() {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [modalID, setModalID] = useState();


    //fetching data
    useEffect(() => {
        getProducts().then((response) => {
            const data = response.map(item => ({
                checked: null,
                cost: (Math.floor(Math.random() * 10) + 1),
                profit: (Math.floor(Math.random() * 20) + 1),
                ...item,
            }))
            setProducts(data);
            localStorage?.setItem("products", JSON.stringify(data));
        });
        getCategories().then((response) => {
            const data = response.map(res => ({
                ...res,
            }))
            localStorage?.setItem("categories", JSON.stringify(data));
        });
    }, []);
    //Select items
    const handleSelect = (id) => {
        if (selectedProducts.includes(id)) {
            const newSelect = selectedProducts.filter(selected => selected !== id)
            setSelectedProducts(newSelect)
            products.map(item => {
                if (item.id === id) item.checked = false
            })
        } else {
            setSelectedProducts([...selectedProducts, id]);
            products.map(item => {
                if (item.id === id) item.checked = true
            })
        }
    }

    const selectAll = () => {
        setSelectedProducts(products.map(selected => selected.id));
        products.map(item => item.checked = true)
    }
    const clearAll = () => {
        setSelectedProducts([]);
        products.map(item => item.checked = null)
    }
    //Search
    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            const data = [...JSON.parse(localStorage.getItem("products"))];
            const newProducts = data.filter(data => data.title.toLowerCase().includes(searchInput))
            setProducts(newProducts)
        }, 500)
    }, [searchInput])

    //modal
    const handleClick = (id) => {
        setModalID(id);
    }


    return (
        <div>
            <Header
                handleInput={handleInput}
                searchInput={searchInput}
                selectAll={selectAll}
                clearAll={clearAll}
                selectedProducts={selectedProducts}
                products={products}
            />
            <Sort
                Products={products}
                setProducts={setProducts}
            />

            <ModalMain
                open={handleClick}
                modalID={modalID}
                className={"Modal"}
            />
            {
                products.length ?
                    <Grid
                        container
                        className="Catalog">
                        {products?.map((item) => (
                            <Product
                                id={item.id}
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                cost={item.cost}
                                profit={item.profit}
                                selected={item.selected}
                                checked={item.checked}
                                handleSelect={handleSelect}
                                selectedProducts={selectedProducts}
                                handleClick={handleClick}
                            />
                        ))}
                    </Grid>

                    :

                    <div className={"Progress__bar--wrapper"}>
                        <CircularProgress
                            className={"Progress_bar"}
                            size={55}
                            thickness={3}
                        />
                    </div>
            }
        </div>
    );
}

export default Catalog;