import React from 'react';


import "./css/createProduct.css";




const createProduct = () => {

    return (
        <div className='body'>
            <div className='container-geral-create'>
                <h1 className='titulo'>Adicionar Produto</h1>
                <div className='container-form'>
                    <form className='form-prod'>
                        <div>Nome Produto</div>
                        <input type="text" id="nome-prod" name="nome-produto"></input>
                        <div>Descrição</div>
                        <input type="text" id="descricao-prod" name="descricao-prod"></input>
                        <div>link imagem</div>
                        <input type="text" id="imagem-prod" name="imagem-prod"></input>
                        <div>Stock em Kg</div>
                        <input type="text" id="stock-prod" name="stock-prod"></input>
                        <div>Preço</div>
                        <input type="text" id="preco-prod" name="preco-prod"></input>
                        <div>Categorias</div>
                        <input type="text" id="tags-prod" name="tags-prod"></input>
                        <div>Localidade</div>
                        <input type="text" id="local-prod" name="local-prod"></input>
                        <a className='submit-button' href='./store'>Submeter</a>
                    </form>
                </div>
            </div>
        </div>

    );
}



export default createProduct;