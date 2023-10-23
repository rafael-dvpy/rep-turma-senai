import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/test');

const ProdutoModel = mongoose.model("Produtos", {
    nome: String,
    preco: Number,
    codigo: String,
    disponivel: Boolean,
})

async function criarProduto (produto) {
    console.log(await ProdutoModel.create(produto))
}

async function exibeTodosOsProdutos () {
    console.log(await ProdutoModel.find())
}

async function exibeProdutoPorNome (nomePesquisa) {
    console.log(await ProdutoModel.findOne({nome: nomePesquisa}))
} 

async function exibeProdutoPorId (idPesquisa) {
    console.log(await ProdutoModel.findById(idPesquisa))
}

async function deletaProdutoPorNome (nomePesquisa) {
    console.log(await ProdutoModel.findOneAndDelete({nome: nomePesquisa}))
} 

async function deletaProdutoPorId (idPesquisa) {
    console.log(await ProdutoModel.findByIdAndDelete(idPesquisa))
}

async function atualizaProdutoPorNome (nomePesquisa, dadosNovos) {
    console.log(await ProdutoModel.findOneAndUpdate({nome: nomePesquisa}, dadosNovos))
} 

async function atualizaProdutoPorId (idPesquisa, dadosNovos) {
    console.log(await ProdutoModel.findByIdAndUpdate(idPesquisa, dadosNovos))
}

async function criaMultiplosProdutos1 (vetorDeProdutos, quantidadeDeProdutos) {
    let contador = 0
    while(contador <= quantidadeDeProdutos -1){
        criarProduto(vetorDeProdutos[contador])
        contador++
    }
}

async function criaMultiplosProdutos2 (vetorDeProdutos) {
    let contador = 0
    while(contador <= vetorDeProdutos.length -1){
        criarProduto(vetorDeProdutos[contador])
        contador++
    }
}

// const produtos = [
//     {
//         nome: "Arroz",
//         preco: 1,
//         codigo: "j321kj3",
//         disponivel: true
//     },
//     {
//         nome: "Feijão",
//         preco: 1,
//         codigo: "j321kj3",
//         disponivel: true
//     },
//     {
//         nome: "Macarrão",
//         preco: 1,
//         codigo: "j321kj3",
//         disponivel: true
//     },
//     {
//         nome: "Maizena",
//         preco: 1,
//         codigo: "j321kj3",
//         disponivel: true
//     },
//     {
//         nome: "Manteiga",
//         preco: 1,
//         codigo: "j321kj3",
//         disponivel: true
//     },
// ]