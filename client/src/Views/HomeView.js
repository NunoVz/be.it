import React from 'react';
import { useState, useEffect } from 'react';
import "./css/homeview.css";
import useFetch from "./useFetch";


const Homeview = () => {
    const { data: prodsAux, isPending } = useFetch('http://localhost:8000/getProds');
    const [filter, setFilter] = useState("All");
    const [prods, setProds] = useState(prodsAux);
    useEffect(() => {
        let result = prodsAux;
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

    }, [filter, isPending]);
    console.log(prods);
    return (

        <div className='body'>
            <div className='containerGeral'>
                {prods != null &&
                    prods.map(data => {
                        return (
                            <div className='produtoWrapper'>
                                <div className='produtoCard'>
                                    <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img>
                                    <h2 className='produtocard-titulo'>{data.nome}</h2>
                                    <h3 className='produtoCard-preco'>{data.preco}/Kg</h3>
                                    <p className='produtoCard-desc'>{data.local}</p>
                                    <div className='produtoCard-comprar'>
                                        <a href=''>Comprar</a>
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