// Importando o styled-components
import styled from "styled-components";
// Importando o Link para utilizar o roteamento
import {Link} from "react-router-dom";

const Opcoe = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
}
`

const Opcoes = styled.ul`
  display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];
function OpcoesHeader() {
  return (
    //Adicionando as opções do menu
    <Opcoes>
      {/* Varrendo o array e retornando um novo array no lugar, otimizando o código */}
      {textoOpcoes.map((texto) => (
        // Adicionando a opção de link. Onde ele irá pegar o link da variável textoOpcoes e dependendo do que for clicado, irá direcionar para a página correspondnete
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcoe><p>{texto}</p></Opcoe>
        </Link>

      ))}
    </Opcoes>
  )
}

export default OpcoesHeader;  