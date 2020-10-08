const { request } = require("http")
const { response } = require ("../../SRC/app")
const jogos = require("../model/games.json")

const getAll = (request, response) => { 
    console.log(request.url)
    response.status(200).send(jogos)
}

const getById = (request,response) => {
    console.log(request.url)
    const id = request.params.id
    console.log(id)
    const jogosCadastrado = jogos.find(jogos => jogos.id == id)

    if (jogosCadastrado =! null)
        return response.status(200).send(jogosCadastrado)
}

module.exports = {
    getAll,
    getById
}