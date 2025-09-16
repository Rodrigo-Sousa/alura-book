// Importando todos os dados e métodos da ferramenta Axios
import axios from "axios";

// Conexão com a API
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"});
