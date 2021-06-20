import "./Sort.css"


function Sort({ Products, setProducts, allProducts }) {
    const fillCatalog = (e) => {
        const sort = e.target.value;
        const newProducts = [...Products];
        if (sort === "asc") {
            const sorted = newProducts.sort((a, b) => b.price - a.price);
            setProducts(sorted);
        } else if (sort === "desc") {
            const sorted = newProducts.sort((a, b) => a.price - b.price);
            setProducts(sorted);
        } else if (sort === "alphabeticalAscending") {
            const sorted = newProducts.sort((a, b) => a.title.localeCompare(b.title));
            setProducts(sorted);
        } else if (sort === "alphabeticalDescending") {
            const sorted = newProducts.sort((a, b) => b.title.localeCompare(a.title));
            setProducts(sorted);
        } else {
            return newProducts;
        }
    };

    return (
        <div className="Sort">
            <select id="sort" className={"Sort__select"} onChange={fillCatalog}>
                <option value="def">Sort By: New Arrivals</option>
                <option value="asc">Price: High To Low</option>
                <option value="desc">Price: Low To High</option>
                <option value="alphabeticalAscending">Alph: A to Z</option>
                <option value="alphabeticalDescending">Alph: Z to A</option>
            </select>
        </div>
    );
}

export default Sort