// Importando todos os dados e métodos da ferramenta Axios
import axios from "axios";

// Conexão com a API
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"});

// Realizando os métodos e funções, para consumir a API do backend 

function getLivros(){
    // Utilizando o axios.create temos algumas instâncias de retorno, dentro delas, o GET
    const response = livrosAPI.get('/');

    // Retorno do axios em data, como temos o retorno na variável response, iremos passar ela, com os dados
    return response.data;
}

// Exportando as funções
export {
    getLivros
}