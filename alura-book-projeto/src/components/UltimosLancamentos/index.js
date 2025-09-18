// Importando o componente de ultimos lancamentos
import { livros } from "./dadosUltimosLancamentos";
// Importando o Styled Components
import styled from "styled-components";

// Importando o componente Titulo
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";

// Importando a imagem do livro, para utilização no card
import imagemLivro from "../../images/angular11.png";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
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
            
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {
                    livros.map(livro => (
                        <ImagemLivrosLancamentos src={livro.src} />
                    ))
                }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo={"Talvez você se interesse por"}
                subtitulo={"Angular 11"}
                descricao={"Construindo uma aplicação integrada com a plataforma do Google."}
                imagem={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default Ultimoslancamentos;