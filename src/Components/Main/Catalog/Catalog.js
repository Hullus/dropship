import './Catalog.css';


import {useEffect, useState} from "react";
import {getProducts} from "./DataRetriver";

import Product from "./Product/Product";
import Header from "./Header/Header";
import Sort from "../Util/Sort";
import ModalBody from "../Modal/ModalBody";
import {Grid, Modal} from "@material-ui/core";
import axios from "axios";


function Catalog () {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] =useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [modalItem, setModalItem] = useState([]);
    const [modalID, setModalID] = useState([]);



    //fetching data
    useEffect(() => {
        getProducts().then((response) => {
            const data = response.map(item=>({
                ...item,
            }))
            setAllProducts(data);
            setProducts(data);
        });
    }, []);
    //Select items
    const handleSelect = (id) => {
        if (selectedProducts.includes(id)){
            const newSelect = selectedProducts.filter(selected => selected !== id)
            setSelectedProducts(newSelect)
        } else {
            setSelectedProducts([...selectedProducts, id]);

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
            const data = [...allProducts];
            const newProducts = data.filter(data => data.title.toLowerCase().includes(searchInput))
            setProducts(newProducts)}, 500)
    }, [searchInput])

    //modal
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${modalID}`)
            .then(res => {
                setModalItem(res.data);
                setOpen(true)
            })
    }, [modalID])


    const handleClick = (id) => {
        // setOpen(true)
        // const selectedItem = allProducts.filter(item => item.id === id);
        // setModalItem(...selectedItem)
        setModalID(id);
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Header
            handleInput={handleInput}
            searchInput={searchInput}
            selectAll = {selectAll}
            clearAll = {clearAll}
            selectedProducts={selectedProducts}
            />
            <Sort
            Products={products}
            setProducts={setProducts}
            />

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

            <Grid
                container
                spacing={0}
                className="Catalog">
                {products?.map((item) => (
                    <Product
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        selected={item.selected}
                        checked={item.checked}
                        handleSelect={handleSelect}
                        selectedProducts={selectedProducts}
                        handleClick = {handleClick}
                    />
                ))}
            </Grid>
        </div>
    );
}

export default Catalog;