const mongoose = require("mongoose");

const prodWaste = mongoose.Schema({
    nome: { type: String, require: true },
    desc: { type: Number, require: true },
    imagem: { type: String, require: true },
    quantidade: { type: Number, require: true },
    Loja: { type: Object, require: true },
    tag: { type: String, require: true },
    idLoja: { type: String, require: true },

});

module.exports = mongoose.model("ProdWastes", prodWaste);
