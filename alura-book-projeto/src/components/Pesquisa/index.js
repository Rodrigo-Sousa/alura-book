// Importante o component de input
import Input from "../Input";
// Importando o styled-components
import styled from "styled-components";
// Importando o status, 
import { useState } from "react";

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

// Componente de pesquisa
function Pesquisa() {
    // Utilizando o status e a função que "muda os valores/estado";
    const [textoDigitado, setTextoDigitado] = useState('');
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura"
            // Lidando com o evento que for passado para a função
            onBlur={evento => setTextoDigitado(evento.target.value)}
             />
             <p>{textoDigitado}</p>
        </PesquisaContainer>
    )
}

export default Pesquisa;