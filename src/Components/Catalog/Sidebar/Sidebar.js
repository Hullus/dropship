import './Sidebar.css';

import Arrow__icon from "../../../Assets/icons/arrow-204-64.png"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className={"Sidebar__niche Sidebar__tab"}>
                <h4>Choose Niche</h4>
                <img src={Arrow__icon} alt={"arrow__icon"} className={"Sidebar__arrow-icon"}/>
            </div>
            <div className={"Sidebar__category Sidebar__tab"}>
                <h4>Choose Category</h4>
                <img src={Arrow__icon} alt={"arrow__icon"} className={"Sidebar__arrow-icon"}/>
            </div>
        </div>
    );
}

export default Sidebar;