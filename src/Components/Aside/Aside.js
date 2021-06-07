import './Aside.css';

import logo from "../../Assets/icons/dropship__logo.png"
import profile from "../../Assets/icons/profile.jpg"
import dashboard from "../../Assets/icons/dashboard.png"
import list from "../../Assets/icons/list.png"
import inventory from "../../Assets/icons/Inventory.png"
import cart from "../../Assets/icons/Cart.png"
import checkList from "../../Assets/icons/checklist.png"
import transaction from "../../Assets/icons/transaction.png"
import category from "../../Assets/icons/category.png"


function Aside() {
    return (
        <div className="Aside">
            <div className={"Aside__logo"}>
                <img src={logo} alt={"dropShip__logo"} className={"Aside__logo__icon"}/>
            </div>
            <div className={"Aside__nav"}>
                <img src={profile} alt={"nav__item"} className={"Aside__nav__icon Aside__nav__profile"}/>
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