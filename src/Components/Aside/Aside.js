import './Aside.css';

import logo from "../../Assets/icons/dropship__logo.png"
import profile from "../../Assets/icons/profile.jpg"
import CartIcon from "../../Assets/svg-icon/CartIcon"
import InventoryIcon from "../../Assets/svg-icon/InventoryIcon";
import OrdersIcon from "../../Assets/svg-icon/OrdersIcon";
import StoreIcon from "../../Assets/svg-icon/StoreIcon";
// import cart from "../../Assets/icons/svgFiles/CartIcon.svg"
import checkList from "../../Assets/icons/svgFiles/Orders.svg"
import transaction from "../../Assets/icons/svgFiles/Transactions.svg"
import category from "../../Assets/icons/svgFiles/Store.svg"
import {NavLink} from "react-router-dom";


const asideIcons = [
    {
        Svg: CartIcon,
        path: "cart",
        className: 'Aside__nav__icon'
    },
    {
        Svg:InventoryIcon,
        path: "catalog",
        className: 'Aside__nav__icon',
    },
    {
        Svg:OrdersIcon,
        path: "orders",
        className: "Aside__nav__icon"
    },
    {
        Svg: StoreIcon,
        path: "store",
        className: 'Aside__nav__icon'
    }
]

function Aside() {
    return (
        <div className="Aside">
            <div className={"Aside__logo"}>
                <img src={logo} alt={"dropShip__logo"} className={"Aside__logo__icon"}/>
            </div>
            <div className={"Aside__nav"}>
                {
                    asideIcons.map((item) => (
                        <NavLink to={`/${item.path}`} activeClassName={'Icon__active'}>
                            <item.Svg className={item.className} />
                         </NavLink>
                    ))}
            </div>
        </div>
    );
}

export default Aside;