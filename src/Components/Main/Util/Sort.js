function Sort({ Products, setProducts }) {
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
        <div className="sort-section">
            <select id="sort" onChange={fillCatalog}>
                <option value="def">Sort By: New Arrivals</option>
                <option value="asc">Price: High To Low</option>
                <option value="desc">Price: Low To High</option>
                <option value="alphabeticalAscending">Alph: high To Low</option>
                <option value="alphabeticalDescending">Alph: Low To Low</option>
            </select>
        </div>
    );
}

export default Sort