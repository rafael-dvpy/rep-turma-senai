const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String, age: Number });

// const kitty = new Cat({ name: 'Zildjian', age: 3 });
// kitty.save()

// Modelo de Produto
// Codigo de barra - string ou number
// Nome - String
// preco - Number

const Produto = mongoose.model('Produto',
{
    codigo: Number,
    nome: String,
    preco: Number
})

// const monitor = new Produto({nome: "MonitorAOC"})

// const monitor = new Produto({
//         codigo: 1,
//         nome: "Monitor AOC FullHD 144hz",
//         preco: 1100
//     }
// )

// monitor.save()

// console.log("Monitor foi salvo com sucesso!")

async function exibeTodosOsProdutos () {
    console.log(await Produto.find())
}

async function exibeUmProduto () {
    console.log(await Produto.findOne({preco: 1100, codigo: 2}))
}

exibeUmProduto()