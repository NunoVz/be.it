import React from 'react';


import "./css/navBar.css";




const NavBar = () => {

    return (
        <div className='NavBar'>
            <li className='logo NavBarList'>
                <img src='' alt='logo'/>
            </li>
            <li className='login NavBarList'>login</li>
            <li className='logout NavBarList'>logout</li>
            <li className='carrinho NavBarList'>cart</li>
            <li className='apoio NavBarList'>customer support</li>
            <li className='perfil NavBarList'>profile</li>
        </div>

    );
}



export default NavBar;