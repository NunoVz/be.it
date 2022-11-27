import React from 'react';

import "./css/createProduct.css";
import { useState } from 'react';




const CreateProduct = () => {
    const [butao, setButao] = useState(false);

    const handleOpen = () => {
        setButao(!butao);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (butao) {
            console.log(e.props);
            const { nome, descricao, stock, tag, imagem } = e.target.elements;
            let details = {
                name: nome.value,
                desc: descricao.value,
                stock: stock.value,
                tag: tag.value,
                imagem: imagem.value,
            };
            let response = await fetch("http://localhost:8000/addProd?id=6382bf1d29975c3c294c788c", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            let result = await response.json();
            alert(result.status);
        } else {
            const { nome, descricao, imagem, local } = e.target.elements;
            let details = {
                name: nome.value,
                desc: descricao.value,
                quantidade: imagem.value,
                local: local.value,
            };
            let response = await fetch("http://localhost:8000/addWaste?id=6382bf1d29975c3c294c788c", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            let result = await response.json();
            alert(result.status);
        }


    };

    return (
        <div className='body'>
            {butao ?
                <div className='container-geral-create'>
                    <h1 className='TogleSwitch' onClick={handleOpen}>Vender Residio!</h1>
                    <div className='container-form'>
                        <h1 className='titulo'>Adicionar Produto</h1>

                        <form className='form-prod' onSubmit={handleSubmit}>
                            <div>Nome Produto</div>
                            <input type="text" id="nome" required name="nome"></input>
                            <div>Descrição</div>
                            <input type="text" id="descricao" required name="descricao"></input>
                            <div>link imagem</div>
                            <input type="text" id="imagem" required name="imagem"></input>
                            <div>Stock em Kg</div>
                            <input type="text" id="stock" required name="stock"></input>
                            <div>Preço</div>
                            <input type="text" id="preco" required name="preco"></input>
                            <div>Categorias</div>
                            <input type="text" id="tags" required name="tags"></input>
                            <div>Localidade</div>
                            <input type="text" id="local" required name="local"></input>
                            <button className='submit-button' type="submit" value="Submeter"></button>
                        </form>
                    </div>
                </div> :
                <div className='container-geral-create'>
                    <h1 className='TogleSwitch' onClick={handleOpen}>Vender Produto!</h1>

                    <div className='container-form'>
                        <h1 className='titulo'>Adicionar Residuos</h1>
                        <form className='form-prod' style={{ height: "60vh" }} onSubmit={handleSubmit}>
                            <div>Nome Produto</div>
                            <input type="text" id="nome" name="nome"></input>
                            <div>Descrição</div>
                            <input type="text" id="descricao" name="descricao"></input>
                            <div>Quantidade Aprox. de Kg</div>
                            <input type="text" id="imagem" name="imagem"></input>
                            <div>Localidade</div>
                            <input type="text" id="local" name="local"></input>
                            <button className='submit-button' type="submit" value="Submeter"></button>
                        </form>
                    </div>
                </div>}

        </div>

    );
}



export default CreateProduct;