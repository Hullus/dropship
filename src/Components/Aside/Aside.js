import './Aside.css';

import logo from "../../Assets/icons/dropship__logo.png"
import profile from "../../Assets/icons/profile.jpg"
import dashboard from "../../Assets/icons/svgFiles/Dashboard.svg"
import list from "../../Assets/icons/svgFiles/Catalog.svg"
import inventory from "../../Assets/icons/svgFiles/Inventory.svg"
import cart from "../../Assets/icons/svgFiles/Cart.svg"
import checkList from "../../Assets/icons/svgFiles/Orders.svg"
import transaction from "../../Assets/icons/svgFiles/Transactions.svg"
import category from "../../Assets/icons/svgFiles/Store.svg"


function Aside() {
    return (
        <div className="Aside">
            <div className={"Aside__logo"}>
                <img src={logo} alt={"dropShip__logo"} className={"Aside__logo__icon"}/>
            </div>
            <div className={"Aside__nav"}>
                <img src={profile} alt={"nav__item"} className={"Aside__nav__profile"}/>
                <img src={dashboard} alt={"nav__item"} className={"Aside__nav__icon"}/>
                <img src={list} alt={"nav__item"} className={"Aside__nav__icon"}/>
                <img src={inventory} alt={"nav__item"} className={"Aside__nav__icon"}/>
                <img src={cart} alt={"nav__item"} className={"Aside__nav__icon"}/>
                <img src={checkList} alt={"nav__item"} className={"Aside__nav__icon"}/>
                <img src={transaction} alt={"nav__item"} className={"Aside__nav__icon"}/>
                <img src={category} alt={"nav__item"} className={"Aside__nav__icon"}/>
            </div>
        </div>
    );
}

export default Aside;