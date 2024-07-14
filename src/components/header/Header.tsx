import React from 'react';
import "./Header.css";
import {ReactComponent as Logo} from "../../assets/images/Logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header-container-wrapper">
            <div className="header-container">
                <Logo width="272"/>
                <nav>
                    <a href="">Home</a>
                    <Link to="/product-descriptions">Server Spaces</Link>
                    <a href="">Credit</a>
                    <a href="">About Us</a>
                    <a href="">Blogs</a>
                    <a href="">Contact</a>
                </nav>
                <section>
                    <button>Log in</button>
                    <button className="sign-up-button">Sign up</button>
                    <MdOutlineShoppingBag size={23}/>
                </section>

            </div>
        </div>
    );
};

export default Header;