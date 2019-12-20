const express = require("express")
const clothes = express.Router()
const cors = require("cors")
var fs = require('fs');

clothes.use(cors())

var files = [];


clothes.post('/getClothes', (req, res)=> {

    var roupas = [
        {
            id: 0,
            nome: "calça jeans",
            valor:"30",
            imagem: "https://img.lojasrenner.com.br/item/548199609/zoom/1.jpg",
            tipo: "calça"
        },
        {
            id: 1,
            nome: "calça moletom",
            valor:"30",
            imagem: "https://lojaspompeia.vteximg.com.br/arquivos/ids/526696/117298-calca-adulto-radical-moletom-cinzaclaro1.jpg?",
            tipo: "calça"
        },
        {
            id: 2,
            nome: "calça social",
            valor:"30",
            imagem: "https://img.lojasrenner.com.br/item/533750373/zoom/1.jpg",
            tipo: "calça"
        },
        {
            id: 3,
            nome: "saia curta",
            valor:"30",
            imagem: "https://produtos.fotos-riachuelo.com.br/media/catalog/product/cache/3541e153ef6ead3044d72626c3847968/s/a/saia-curta-textura-12624292_foto1_frontal.jpg",
            tipo: "saia"
        },
        {
            id: 4,
            nome: "saia longa",
            valor:"30",
            imagem: "https://d3vnyi5j6ba1mc.cloudfront.net/Custom/Content/Products/10/30/1030563_saia-longa-listrada-80102955_t1_637044534990157948",
            tipo: "saia"
        },
        {
            id: 5,
            nome: "saia jeans",
            valor:"30",
            imagem:"https://cdn.shopify.com/s/files/1/1661/5911/products/saia-jeans-star-revanche-381702_1024x1024.jpg?v=1570507373",
            tipo: "saia"
        },
        {
            id: 6,
            nome: "vestido curto",
            valor:"30",
            imagem: "https://http2.mlstatic.com/vestido-curto-feminino-festa-ombro-a-ombro-saia-transpassada-D_NQ_NP_860274-MLB31135715554_062019-F.webp",
            tipo: "vestido"
        },
        {
            id: 7,
            nome: "vestido longo",
            valor:"30",
            imagem: "https://ph-cdn3.ecosweb.com.br/Web/posthaus/foto/moda-feminina/vestido-longo/vestido-longo-poa-e-floral-com-fenda-frontal_310959_600_1.jpg",
            tipo: "vestido"
        },
        {
            id: 8,
            nome: "vestido jeans",
            valor:"30",
            imagem: "https://zinzane.vteximg.com.br/arquivos/ids/232721-708-907/019938_8067_2-VESTIDO-JEANS-CINTURA-ALTA.jpg?v=637079706431800000",
            tipo: "vestido"
        },
    ]

    res.json(roupas);
})

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports = clothes;