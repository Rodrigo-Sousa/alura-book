// Importante o component de input
import Input from "../Input";
// Importando o styled-components
import styled from "styled-components";
// Importando o status, 
import { useEffect, useState } from "react";
// Importando o componente de livros - Não utilizado mais esta fonte de dados
// import { livros } from "./dadosPesquisa";

// Importando a função do Sercies (para pegar os livros)
import { getLivros } from "../../services/livros"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
// Componente de pesquisa
function Pesquisa() {
    // Mudando a fonte de dados

    // Utilizando o status e a função que "muda os valores/estado";
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    // Novo estado para armazenar os livros. Iniciando um arrau vazio
    const [livros, setLivros] = useState([]);

    // Utilizando useEffect, para já deixar os dados carregados assim que apágina for carregada
    useEffect(() => {
        // Invocando a função
        fetchLivros();
    }, []);

    // O UsseEffect, não lida tão bem com o async await, vamos criar uma função para tratar isso
    async function fetchLivros() {
        
        // Esse primeiro parâmetro é a função a ser feita, assim que a página carregar. Neste caso, chamaremos a API de livros (que está dentro do services)
        const livrosDaAPI = await getLivros();

        // Após pegar os livros, vamos efetuar o setLivros
        setLivros(livrosDaAPI);
    }

    function fazPesquisa(evento) {
        // Criando um filtro pegando o texto digitado pelo usuário fazendo uma pesquisa na lista de livros, observando os livros que se encaixam na busca
        const textoDigitado = evento.target.value;
        // Essa função é responsável por filtrar os livros digitados na barra de pesquisa.
        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
    }
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura"
                // Lidando com o evento que for passado para a função
                onBlur={evento => { fazPesquisa(evento) }
                }
            />
            {
                // incluindo o .map 
                livrosPesquisados.map(
                    // Como parâmetros temos uma arrow function
                    livro => (
                        <Resultado>
                            <img src={livro.src} />
                            <p>{livro.nome}</p>
                        </Resultado>

                    )
                )
            }
        </PesquisaContainer>
    )
}

export default Pesquisa;