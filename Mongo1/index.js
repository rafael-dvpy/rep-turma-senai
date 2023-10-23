const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model('Produto',
{
    codigo: Number,
    nome: String,
    preco: Number
})

async function criaNovoProduto(produto) {
    await Produto.create(produto)
}

async function atualizaProduto(nomeAProcurar, novoCodigo, novoNome, novoPreco) {
    await Produto.findOneAndUpdate(
        {nome: nomeAProcurar},
        {
            codigo: novoCodigo,
            nome: novoNome,
            preco: novoPreco
        }
    )
}

async function deletaProduto(nomeADeletar){
    await Produto.findOneAndDelete({nome: nomeADeletar})
}

async function exibeTodosOsProdutos(){
    console.log(await Produto.find())
}

async function exibeUmProduto (nomeAProcurar) {
    console.log(await Produto.findOne({nome: nomeAProcurar}))
}

criaNovoProduto(129192, "Monitor", 1000)
atualizaProduto(129192, 1231, "TV", 1300)
deletaProduto(129192)
exibeTodosOsProdutos()
exibeUmProduto(129192)

const produtos = [
    {nome: "monitor", codigo: 1001, preco: 300},
    {nome: "lorem", codigo: 12101, preco: 301320},
    {nome: "dor", codigo: 1011201, preco: 30110}
]
condicao = true

while(condicao){
    criaNovoProduto()
}

criaNovoProduto(produtos[0])
