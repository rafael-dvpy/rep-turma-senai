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

const 