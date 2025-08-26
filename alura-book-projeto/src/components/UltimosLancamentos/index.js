// Importando o componente de ultimos lancamentos
import { livros } from "./dadosUltimosLancamentos";
// Importando o Styled Components
import styled from "styled-components";

// Importando o componente Titulo
import { Titulo } from "../Titulo";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const ImagemLivrosLancamentos = styled.img`
    margin-left: 1%;
    border-radius: 5px;
`

// Criação do componente, para utilização de pomps
function Ultimoslancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor={"#EB9B00"}
                tamanhoFonte={"36px"}
            
            >Últimos Lançamentos.</Titulo>
            <NovosLivrosContainer>
                {
                    livros.map(livro => (
                        <ImagemLivrosLancamentos src={livro.src} />
                    ))
                }
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default Ultimoslancamentos;