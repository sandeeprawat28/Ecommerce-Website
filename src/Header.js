import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() { 
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" att=""/>
            </Link> */}

            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
              
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                     <span className="header__option1">Hello, {!user?"Guest":user.email}</span>
                     <span className="header__option2">{user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link> 

                <Link to="/orders" className="header__link">
                    <div className="header__option">
                     <span className="header__option1">Returns</span>
                     <span className="header__option2">& Orders</span>
                    </div>
                </Link>   

                <Link to="/prime" className="header__link">
                    <div className="header__option">
                     <span className="header__option1">Your</span>
                     <span className="header__option2">Prime</span>
                    </div>
                </Link>    

                <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <div>
                          <ShoppingCartOutlinedIcon/>
                        </div>
                        <div>
                          <span className="header__option2 basketCount">{basket.length}</span> 
                        </div>
                    </div>
                </Link> 
            </div>
        </nav>
    )
}

export default Header
