import React from 'react';


import "./css/landing.css";
import NavBar from './navBar';




const Landing = () => {

    return (
        <div className='body'>
            <NavBar />
            <section id='banner'>
                <img src='assets/imgs/fundo1-08_1.png' className='banner-img' alt='banner' />
                <div className='banner-text'>LOOT</div>
            </section>

            <section id='sustentabilidade'>
                <div className='container-round-text'>

                    <h2>PROXIMIDADE</h2>
                    <p >Todos os produtos vêm de produtores próximos do ponto de venda de forma a criar um mercado próximo e inserido na sua comunidade.</p>
                </div>
                <div className='container-round-text'>

                    <h2>QUALIDADE</h2>
                    <p>Os produtos são frescos e vêm diretos de produtores não tendo de passar por processos que aumentam a longevidade do produto em custo da sua qualidade</p>
                </div>
                <div className='container-round-text'>

                    <h2>SUSTENTABILIDADE</h2>
                    <p>O transporte é feito em distâncias reduzidas diminuindo a quantidade de gases de efeito estufa emitidos durante este processo.</p>
                </div>
                <div className='container-round-text'>

                    <h2>CUSTO</h2>
                    <p>A eliminação de um intermediário como um armazém e de um trajeto grande de transporte permite um preço competitivo e justo.</p>
                </div>
            </section>
            <section id='contactos'>
                <div className='contactos1'>
                    <h1>CONTACTOS</h1>

                </div>
                <h2 className='numerotele'> +351 913 231 442</h2>
                <div className='logoFimLanding'>
                    <img src='assets/imgs/logo1-07 6.png' className='logoFimLanding' alt='logo' />
                </div>
            </section>
        </div>

    );
}



export default Landing;