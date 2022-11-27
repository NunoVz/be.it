import React from 'react';


import "./css/landing.css";
import NavBar from './navBar';




const Landing = () => {

    return (
        <div className='body'>
            <NavBar/>
            <section id='banner'>
                <img src='assets/imgs/fundo1-08_1.png' className='banner-img' alt='banner' />
                <div className='banner-text'>LOOT</div>
            </section>
            {/*<section id='about-us'>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
            </section>*/}
            <section id='sustentabilidade'>
                <div className='container-round-text'>
                    <img src='assets/imgs/logo1-07_1.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h2>Proximidade</h2>
                    <p>Todos os produtos vêm de produtores próximos do ponto de venda de forma a criar um mercado próximo e inserido na sua comunidade.</p>
                </div>
                <div className='container-round-text'>
                    <img src='assets/imgs/logo1-07_1.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h2>Qualidade</h2>
                    <p>Os produtos são frescos e vêm diretos de produtores não tendo de passar por processos que aumentam a longevidade do produto em custo da sua qualidade</p>
                </div>
                <div className='container-round-text'>
                    <img src='assets/imgs/logo1-07_1.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h2>Sustentabilidade</h2>
                    <p>O transporte é feito em distâncias reduzidas diminuindo a quantidade de gases de efeito estufa emitidos durante este processo.</p>
                </div>
                <div className='container-round-text'>
                    <img src='assets/imgs/logo1-07_1.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h2>Custo</h2>
                    <p>A eliminação de um intermediário como um armazém e de um trajeto grande de transporte permite um preço competitivo e justo.</p>
                </div>
            </section>
            <section id='contactos'>
                <div className='contactos1'>
                    <h1>contactos</h1>
                </div>
                <div className='contactos2'>
                    <h1>contactos</h1>
                </div>
            </section>
        </div>

    );
}



export default Landing;