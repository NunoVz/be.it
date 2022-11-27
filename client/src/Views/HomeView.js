import React from 'react';



let generateShops = () => {
    let shops = [];
    for (let i = 0; i < 4; i++) {
        shops.push(
            <div className='container-round-text'>
                <img src='https://static.thenounproject.com/png/539236-200.png' alt='about-us-text-icon' className='img-container' />
                <h1>about us</h1>
                <p>about us</p>
            </div>
        );
    }
    return shops;
}

const Homeview = () => {
    
    
    return(
        <div className='body'>

        </div>
    );
}



export default Homeview;