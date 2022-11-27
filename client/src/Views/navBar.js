import React from 'react';
import { Link } from "react-router-dom";

import "./css/navBar.css";



const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className='NavBar'>
            <div className='NavBarContainer'></div>
            <li className='NavBarList'>
                <img src='assets/imgs/logo1-07_1.png' alt='logo' className='logo' />
            </li>
            <div className='ContainerLogin'>

                <Link className='link' to="/store"> <li className='text'>Loja</li></Link>
                <div className="dropdown">
                    <img onClick={handleOpen} className='Iconlogin' alt='login' src='assets/imgs/iconlogin.svg'></img>
                    {open ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <form className='form1'>
                                    <div>Email</div>
                                    <input type="text" id="email" name="email"></input><br />
                                    <div>Password</div>
                                    <input type="password" id="password" name="password"></input>
                                    <a className='logIn-button' href='./store'>Log In</a>
                                </form>
                            </li>
                            <li className="menu-item">
                                <Link className='link' to="/register"> <li className='textRegister'>Registra-te aqui!</li></Link>
                            </li>
                        </ul>
                    ) : null}
                </div>


            </div>

        </div>

    );
}



export default NavBar;