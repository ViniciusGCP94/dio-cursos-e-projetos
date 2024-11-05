const offset = 0;
const limit = 10;
const url =  `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

fetch(url)
    .then(function(response){ // promise como resposta
        return response.json() // conversão para JSON
    })
    .then(function(jsonBody){ //Body convertido
        console.log(jsonBody) // imprima o Body
    })
    .catch(function(error){
    console.error(error)
    })
    .finally(function(){
        console.log('Requisição concluída!')
    })

try{

} catch (error) {

} finally {

}