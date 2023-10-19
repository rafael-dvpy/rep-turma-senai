const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

async function main () {
    const Produto = mongoose.model('Produto',
    {
        codigo: Number,
        nome: String,
        preco: Number
    })

    Produto.create({
        codigo: 1,
        nome: "Monitor AOC FullHD 144hz",
        preco: 1100
    })

    await Produto.findOneAndUpdate(
        {preco: 1100},
        {
            codigo: 2,
            nome: "Monitor Genérico DELL",
            preco: 400
        }
    )

    await Produto.findOneAndDelete({preco: 400})

    
    console.log(await Produto.find())

    console.log(await Produto.findOne({preco: 1100}))

}

main()
