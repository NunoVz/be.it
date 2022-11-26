import React from 'react';


import "./css/landing.css";
import NavBar from './navBar';




const Landing = () => {

    return (
        <div className='body'>
            <NavBar/>
            <section id='banner'>
                <img src='https://media-manager.noticiasaominuto.com/1920/naom_62d6b6f19c36c.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyNTYwLCJjcm9wSGVpZ2h0IjoxNDQwLCJjcm9wWCI6MCwiY3JvcFkiOjExMn19' className='banner-img' alt='banner' />
                <div className='banner-text'>LOOT</div>
            </section>
            <section id='about-us'>
                <div className='about-us-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
                <div className='about-us-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
                <div className='about-us-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
                <div className='about-us-text'>
                    <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container'/>
                    <h1>about us</h1>
                    <p>about us</p>
                </div>
            </section>
            <section className='sustentabilidade'>
                <div className='sustentabilidade-text'>
                    <h1>sustentabilidade</h1>
                </div>
            </section>
        </div>

    );
}



export default Landing;