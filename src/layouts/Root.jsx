import { Outlet } from "react-router-dom";
import Navigetion from "../features/header/Navigetion";
import './style.css'

const Rooot = () => {
    return (
        <div>
            <Navigetion></Navigetion>
            <Outlet></Outlet>
        </div>
    );
};

export default Rooot;