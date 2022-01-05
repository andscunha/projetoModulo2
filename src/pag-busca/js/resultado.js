//Models

var filme1 = sessionStorage.getItem("item_pesq")

async function  apiFilme(filme1){

    const chave = "b0df158e"
    let url =  `https://www.omdbapi.com/?apikey=${chave}&t=${filme1}`
    let respostaApi = await fetch(url).then(response => response.json());
    console.log(respostaApi)
    try{
        if(respostaApi.Title !== undefined){
            sucesso(respostaApi)
        } else {
            throw new Error ('O filme não foi encontrado')
        }
    }catch(error){
        erro(error)
    }
    
}

apiFilme(filme1);

// View
function sucesso(respostaApi){
    $('#titulo').html(`${respostaApi.Title}`)
    $('#diretor').html(`Diretor: ${respostaApi.Director}`)
    $('#ano').html(`Ano: ${respostaApi.Year}`)
    $('#lancamento').html(`Lançamento: ${respostaApi.Release}`)
    $('#duracao').html(`Duração: ${respostaApi.Runtime}`)
    $('#sinopse').html(`Sinopse: ${respostaApi.Plot}`)
    $('#poster-filme').html(`<img src="${respostaApi.Poster}">`)
}

function erro(error){
    $('#diretor').empty()
    $('#ano').empty()
    $('#lancamento').empty()
    $('#duracao').empty()
    $('#sinopse').empty()
    $('#poster-filme').empty()
    $('#titulo').html(`${error}`)
}