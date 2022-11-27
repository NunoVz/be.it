import React from 'react';
import { useState, useEffect } from 'react';
import "./css/homeview.css";
import useFetch from "./useFetch";


const Homeview = () => {
    const { data: prodsAux, isPending } = useFetch('http://localhost:8000/getProds');
    const [prods, setProds] = useState(prodsAux);

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
            {console.log(prods)}
            <div className='searchBar'>
                <h1 className='Produtos'>Produtos</h1>
                <div className='container'>
                    <img className="searchIcon"src="assets/imgs/LUPA-13.png" alt='lupa'/>
                    <input type="text" placeholder="Search..." />
                    <h4 className='addButton'>+ADICIONAR</h4>
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
                                    <h3 className='produtoCard-preco'>{data.preco}/Kg</h3>
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