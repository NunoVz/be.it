const mongoose = require("mongoose");
const axios = require('axios');


const Vendedor = require("../models/vendedor");
const Funcionario = require("../models/funcionario");
const produto = require("../models/produto");
const waste = require("../models/prodWaste");



module.exports = {
  getProds: async (req, res, next) => {
    produto.find().then(result => {
      console.log(result);
      res.status(200).json(result)
    })
  },
  getProd: async (req, res, next) => {
    id = req.query.id;
    produto.findOne({ _id: id }).then(result => {

      res.status(200).json(result)
    })
  },
  getCompProd: async (req, res, next) => {
    id = req.query.id;
    produto.findOne({ _id: id }).then(result => {
      Vendedor.findOne({ _id: result.idVendedor }).then(result => {

        res.status(200).json(result);
      })
    })
  },
  postFunc: async (req, res, next) => {

    const newFunc = new Funcionario({
      nome: req.body.nome,
      telemovel: req.body.telemovel,
      email: req.body.email,
      pass: req.body.pass,
      imagem: req.body.imagem
    });
    newFunc.save();


    res.status(200).send("Ok");

  },
  postprod: async (req, res, next) => {

    const newProd = new produto({
      nome: req.body.nome,
      imagem: req.body.imagem,
      desc: req.body.desc,
      stock: req.body.stock,
      preco: req.body.preco,
      idVendedor: req.query.id,
      tag: req.body.tag
    });
    newProd.save();


    res.status(200).send("Ok");

  },
  postWaste: async (req, res, next) => {

    const newWaste = new waste({
      nome: req.body.nome,
      imagem: req.body.imagem,
      desc: req.body.desc,
      preco: req.body.preco,
      Loja: req.body.loja,
      tag: req.body.tag,
      quantidade: req.body.quantidade
    });
    newWaste.save();


    res.status(200).send("Ok");

  },
  postVend: async (req, res, next) => {


    const newVendedor = new Vendedor({
      nome: req.body.nome,
      telemovel: req.body.telemovel,
      email: req.body.email,
      pass: req.body.pass,
      NIF: req.body.nif,
    });
    newVendedor.save();


    res.status(200).send("Ok");

  },

}



