const fs = require('fs')

fs.readFile("teste.txt","utf8", (erro, dados) => 
    {
    if(erro){
        console.log(erro)
    } else {
        console.log(dados)
    }
})

const mensagem = "japaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

fs.writeFile("alo.txt", mensagem, "utf8", (erro) =>
{
    if(erro){
        console.log(erro)
    } else{
        console.log("foi criado sim")
    }
})

const mensagem2 = "\n nao"

fs.appendFile("alo.txt", mensagem2, "utf8", (erro) =>
    {
        if(erro){
            console.log(erro)
        } else{
            console.log("foi criado sim")
        }
})

fs.unlink("teste.txt", (erro) => 
{
    if(erro){
        console.log(erro)
    }else{
        console.log("apaguei essa GIROMBA")
    }
})