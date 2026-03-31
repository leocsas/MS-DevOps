const gatoImagem = document.getElementById('gatoImagem')
const button = document.getElementById('btn')

async function buscarGato() {
    try {
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search')
        const dados = await resposta.json()

        gatoImagem.src = dados[0].url
    }

    catch (erro) {
        console.log('Erro ao buscar imagem:', erro)
        alert('Não foi possível carregar imagem do gato.')
    }
}

button.addEventListener('click', buscarGato)

buscarGato()