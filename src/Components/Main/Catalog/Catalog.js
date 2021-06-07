import './Catalog.css';


import {useEffect, useState} from "react";
import {getProducts} from "./DataRetriver";
import Product from "./Product/Product";
import Header from "./Header/Header";
import Sort from "../Util/Sort";
function Catalog () {

    const [allProducts, setAllProducts] = useState();
    const [products, setProducts] = useState();

    useEffect(() => {
        getProducts().then((response) => {
            const data = response.map(item=>({
                ...item,
                selected:false
            }))
            setAllProducts(data);
            setProducts(allProducts);
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="Catalog">
                {allProducts?.map((item) => (
                    <Product
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        selected={item.selected}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;