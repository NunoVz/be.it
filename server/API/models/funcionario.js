const mongoose = require("mongoose");

const funcionario = mongoose.Schema({
    nome: { type: String, require: true },
    telemovel: { type: Number, require: true },
    email: { type: String, require: true },
    pass: { type: String, require: true },
    imagem: { type: String, require: true },

});

module.exports = mongoose.model("Funcionario", funcionario);
