const mongoose = require("mongoose");

const loja = mongoose.Schema({
    nome: { type: String, require: true },
    desc: { type: String, require: true },
    imagem: { type: String, require: true },
    idVendedor: { type: Object, require: true },
    local: { type: String, require: true },
    DataRegisto: { type: Date, require: true },
});

module.exports = mongoose.model("Loja", loja);
