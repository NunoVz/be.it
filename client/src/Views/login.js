import React from 'react';


import "./css/login.css";
import { Link } from "react-router-dom";




const Login = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className='body'>
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

                            </ul>
                        ) : null}
                    </div>


                </div>

            </div>

            <section className='secRegister'>
                <form className='midlecontainer'>
                    <h1 className='FormLabel'>Nome</h1>
                    <input className='RegisterForm' type="name" id="name" name="name"></input><br />
                    <h1 className='FormLabel' >Password</h1>
                    <input className='RegisterForm' type="password" id="password" name="password"></input>
                    <h1 className='FormLabel' >Email</h1>
                    <input className='RegisterForm' type="email" id="email" name="email"></input>
                    <h1 className='FormLabel' >Telemovel</h1>
                    <input className='RegisterForm' type="telemovel" id="telemovel" name="telemovel"></input><br></br>
                    <a class="logIn-button" href="./store">Register</a>
                </form>
            </section>

        </div>

    );
}



export default Login;