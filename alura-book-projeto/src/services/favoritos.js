// Importando todos os dados e métodos da ferramenta Axios
import axios from "axios";

// Conexão com a API
const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"});

// Realizando os métodos e funções, para consumir a API do backend 

async function getFavoritos(){
    // Utilizando o axios.create temos algumas instâncias de retorno, dentro delas, o GET. Informando que a função possui códigos assincronos, que precisa esperarpara carregar eles
    const response = await favoritosAPI.get('/');

    // Retorno do axios em data, como temos o retorno na variável response, iremos passar ela, com os dados
    return response.data;
}

// Exportando as funções
export {
    getFavoritos
}