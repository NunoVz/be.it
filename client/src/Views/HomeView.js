import React from 'react';



let generateShops = () => {
    //receber os dados do servidor
    let shops = [];
    let produto_html = [];
    for (let i = 0; i < 6; i++) {
        produto_html.push(
            <div className='produtoCard'>
                {/*receber imagem do servidor*/}
                <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                {/*receber imagem do servidor*/}
                <div className='produtoCard-titulo'>Produto nome</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-preco'>Produto preço</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-desc'>Produto desc</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-comprar'>
                    <a href=''>Comprar</a>
                </div>
            </div>
        );
    }
    return produto_html;
}

const Homeview = () => {
    
    
    return(
        <div className='body'>
            <div className='produtoWrapper'>
                <div className='produtoCard'>
                    {/*receber imagem do servidor*/}
                    <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-titulo'>Produto nome</div>
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-preco'>Produto preço</div>
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-desc'>Produto desc</div>
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-comprar'>
                        <a href=''>Comprar</a>
                    </div>
                </div>
            </div>
            <div className='produtoWrapper'>
                <div className='produtoCard'>
                    {/*receber imagem do servidor*/}
                    <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-titulo'>Produto nome</div>
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-preco'>Produto preço</div>
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-desc'>Produto desc</div>
                    {/*receber imagem do servidor*/}
                    <div className='produtoCard-comprar'>
                        <a href=''>Comprar</a>
                    </div>
                </div>
            </div>
            <div className='produtoCard'>
                {/*receber imagem do servidor*/}
                <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                {/*receber imagem do servidor*/}
                <div className='produtoCard-titulo'>Produto nome</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-preco'>Produto preço</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-desc'>Produto desc</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-comprar'>
                    <a href=''>Comprar</a>
                </div>
            </div><div className='produtoCard'>
                {/*receber imagem do servidor*/}
                <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                {/*receber imagem do servidor*/}
                <div className='produtoCard-titulo'>Produto nome</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-preco'>Produto preço</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-desc'>Produto desc</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-comprar'>
                    <a href=''>Comprar</a>
                </div>
            </div><div className='produtoCard'>
                {/*receber imagem do servidor*/}
                <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                {/*receber imagem do servidor*/}
                <div className='produtoCard-titulo'>Produto nome</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-preco'>Produto preço</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-desc'>Produto desc</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-comprar'>
                    <a href=''>Comprar</a>
                </div>
            </div><div className='produtoCard'>
                {/*receber imagem do servidor*/}
                <img src='https://i.imgur.com/1Q1Z1Zu.png' alt=''></img> 
                {/*receber imagem do servidor*/}
                <div className='produtoCard-titulo'>Produto nome</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-preco'>Produto preço</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-desc'>Produto desc</div>
                {/*receber imagem do servidor*/}
                <div className='produtoCard-comprar'>
                    <a href=''>Comprar</a>
                </div>
            </div>
        </div>
    );
}



export default Homeview;