import React from 'react';
import { useState, useEffect } from 'react';
import "./css/homeview.css";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";


const Homeview = () => {
    const { data: prodsAux, isPending } = useFetch('http://localhost:8000/getProds');
    const [prods, setProds] = useState(prodsAux);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    /*
    const [filter, setFilter] = useState("All");
    const [prods, setProds] = useState(prodsAux);
    useEffect(() => {
        let result = prodsAux;
        console.log("Entrei Agora");
        switch (filter) {
            case "All":
                result = prodsAux;
                break;
            case "Coimbra":
                result = prodsAux.filter(prodsAux => prodsAux.local === 'Coimbra')
                break;
            case "Porto":
                result = prodsAux.filter(prodsAux => prodsAux.local === 'Porto')
                break;
        }
        // So funciona assim wtf xD
        setProds(result)
        setProds(result)

    }, [filter, isPending]); */

    return (

        <div className='body'>
            <div className='NavBar'>
                <div className='NavBarContainer'></div>
                <li className='NavBarList'>
                    <img src='assets/imgs/logo1-07_1.png' alt='logo' className='logo' />
                </li>
                <div className='ContainerLogin'>

                    <Link className='link' to="/store"> <li className='text'>LOJA</li></Link>
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
                                    <Link className='link' to="/register"> <li className='textRegister'>Regista-te aqui!</li></Link>
                                </li>
                            </ul>
                        ) : null}
                    </div>


                </div>

            </div>
            <div className='searchBar'>
                <h1 className='Produtos'>Produtos</h1>
                <div className='container'>
                    <img className="searchIcon" src="assets/imgs/LUPA-13.png" alt='lupa' />
                    <input type="text" placeholder="Search..." />
                    <h4 className='addButton'><a href='../createProduct'>+ADICIONAR</a></h4>
                </div>
            </div>
            <div className='containerGeral'>
                {prodsAux != null &&
                    prodsAux.map(data => {
                        return (
                            <div className='produtoWrapper'>
                                <div className='produtoCard'>
                                    <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img>
                                    <h2 className='produtocard-titulo'>{data.nome}</h2>
                                    <h3 className='produtoCard-preco'>{data.preco}$/Kg</h3>
                                    <div className='produtoCard-line-container'>
                                        <div className='location-container'>
                                            <img className='location-icon' src='assets/imgs/pin-13.png' alt=''></img>
                                            <p className='produtoCard-desc'>{data.local}</p>
                                        </div>
                                        <div className='produtoCard-comprar'>
                                            <a href=''>Contacto</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}



export default Homeview;