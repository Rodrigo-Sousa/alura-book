// Importante o component de input
import Input from "../Input";
// Importando o styled-components
import styled from "styled-components";
// Importando o status, 
import { useState } from "react";
// Importando o componente de livros
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
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
    // Utilizando o status e a função que "muda os valores/estado";
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura"
                // Lidando com o evento que for passado para a função
                onBlur={evento => {
                    // Criando um filtro pegando o texto digitado pelo usuário fazendo uma pesquisa na lista de livros, observando os livros que se encaixam na busca
                    const textDigitado = evento.target.value;
                    // Essa função é responsável por filtrar os livros digitados na barra de pesquisa.
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textDigitado));
                    setLivrosPesquisados(resultadoPesquisa);
                }
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