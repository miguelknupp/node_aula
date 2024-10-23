const express = require("express")
const app = express()
const port = 5000 
const path = require('path')
const caminho = path.join(__dirname ,'pages')

//TRABALHA COM POST
app.get("/users/cadarso", (req,res) => {
    console.log(req.body)
    res.sendFile(`${caminho}/cadastro.html`)
})

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


app.post("/users/salve", (req,res) => {
    console.log(req.body)
    const login = req.body.Usu
    const senha = req.body.senha
    console.log(`Login do individuo ${login} e a senha${senha}`)

    res.sendFile(`${caminho}/cadastroConfirmado.html`)
})

// simula ter usuario authenticado

const checaAutorizacao = (req,res, next) =>{
    req.authStatus = true 

    if (req.authStatus) {
        console.log("Usuario authentificado")
    } else {
        console.log("Usuario não possui permissão para ascessar")
    }
    next()
}

app.use(checaAutorizacao)

app.get("/users/:id", (req,res) =>{
    const id = req.params.id
    
    console.log(`Usuario ${id} foi encontrado no banco`)
    res.sendFile(`${caminho}/users.html`)
})

app.get("/", (req,res) => {
    res.send("Olá mundo")
});

app.get("/home",  (req,res) =>{
    res.sendFile(`${caminho}/index.html`)
});

app.use((req,res, next) => {
    res.status(404).sendFile(`${caminho}/404.html`)
})

app.listen( port,console.log(` Servirdor rodando na porta ${port}`));

