import './Header.css';


function Header () {
    return (
        <header className="Header">
            <div className={"Header__nav"}>
              <div className={"Nav__count"}>
                  <button className={"Nav__button Blue__button"}>SELECT ALL</button>
                  <span className={"Nav__count"}>selected 0 out of 20 products</span>
              </div>
              <div className={"Nav__search"}>
                  <input className={"Search__input"} type="text"/>
                  <button className={"Nav__button Blue__button"}>ADD TO INVENTORY</button>
              </div>
            </div>
        </header>
    );
}

export default Header;