const mongoose = require("mongoose");
const axios = require('axios');


const Comprador = require("../models/comprador");
const Vendedor = require("../models/vendedor");
const Funcionario = require("../models/funcionario");
const Loja = require("../models/loja");
const produto = require("../models/produto");
const waste = require("../models/prodWaste");



module.exports = {
  getAll: async (req, res, next) => {
    console.log("Ola");
  },
  postComp: async (req, res, next) => {

    const newComp = new Comprador({
      nome: req.body.nome,
      telemovel: req.body.telemovel,
      email: req.body.email,
      pass: req.body.pass
    });
    newComp.save();


    res.status(200).send("Ok");

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
  postLoja: async (req, res, next) => {

    const newLoja = new Loja({
      nome: req.body.nome,
      imagem: req.body.imagem,
      desc: req.body.desc,
      idVendedor: req.body.Vendedor,
      local: req.body.local,
      DataRegisto: new Date()
    });
    newLoja.save();


    res.status(200).send("Ok");

  },
  postprod: async (req, res, next) => {

    const newProd = new produto({
      nome: req.body.nome,
      imagem: req.body.imagem,
      desc: req.body.desc,
      stock: req.body.stock,
      preco: req.body.preco,
      Loja: req.body.loja,
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



