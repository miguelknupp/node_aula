// utilização do modulo externo
const minimist = require("minimist")
const argumentos = minimist(process.argv.slice(2))

//utilizar modulo interno
const modulosoma = require("../modulo_interno")
const funcSoma = modulosoma.soma

const a = argumentos["a"]
const b = argumentos["b"]

funcSoma(a,b)


//Utilização de core modules 
const fs = require('fs')
const resultado = funcSoma(a,b)

fs.writeFile("resultado.txt", resultado, "utf-8", (erro,dados) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("ta tudo certo patrão", dados)
    }
})