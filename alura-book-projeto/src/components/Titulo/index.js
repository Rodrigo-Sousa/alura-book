import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    // Passando via props a cor, caso não seja informado, irá seta a cor default
    color: ${props => props.cor || '#EB9B00'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`
