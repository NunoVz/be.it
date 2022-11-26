const mongoose = require("mongoose");

const produto = mongoose.Schema({
    nome: { type: String, require: true },
    desc: { type: String, require: true },
    imagem: { type: String, require: true },
    stock: { type: Number, require: true },
    preco: { type: String, require: true },
    Loja: { type: Object, require: true },
    tag: { type: String, require: true },

});

module.exports = mongoose.model("Produto", produto);
