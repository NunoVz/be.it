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
            <section id='about-us'>
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
            </section>
            <section id='sustentabilidade'>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h1>sustentabilidade</h1>
                    <p>sustentabilidade</p>
                </div>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h1>sustentabilidade</h1>
                    <p>sustentabilidade</p>
                </div>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h1>sustentabilidade</h1>
                    <p>sustentabilidade</p>
                </div>
                <div className='container-round-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='sustentabilidade-text-icon' className='img-container'/>
                    <h1>sustentabilidade</h1>
                    <p>sustentabilidade</p>
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