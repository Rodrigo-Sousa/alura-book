// Importando o styled-components
import styled from "styled-components";

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

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
function OpcoesHeader(){
    return (
        //Adicionando as opções do menu
        <Opcoe>
          {/* Varrendo o array e retornando um novo array no lugar, otimizando o código */}
          {textoOpcoes.map((texto) => (
            <Opcoes><p>{texto}</p></Opcoes>
          ))}
        </Opcoe>
    )
}

export default OpcoesHeader;  