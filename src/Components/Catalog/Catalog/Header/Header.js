import './Header.css';


function Header({selectedProducts, handleInput, searchInput, selectAll, clearAll, products}) {


    return (
        <header className="Header">
            <div className={"Header__nav"}>
                <div className={"Nav__count"}>
                    <button
                        className={"Nav__button Blue__button"}
                        onClick={() => selectAll()}
                    >
                        SELECT ALL
                    </button>

                    <span className={"Nav__count"}>selected {selectedProducts.length} out of {products.length} products</span>
                    {selectedProducts.length > 0 && < button
                        className={"Nav__button Blue__button"}
                        onClick={clearAll}
                    >CLEAR SELECTED</button>}
                </div>
                <div className={"Nav__search"}>
                    <input
                        className={"Search__input"}
                        type="text"
                        placeholder={"Search..."}
                        onChange={(e) => handleInput(e)}
                        value={searchInput}
                    />
                    <button className={"Nav__button Blue__button"}>ADD TO INVENTORY</button>
                </div>
            </div>
        </header>
    );
}

export default Header;