// Importando as imagens para o componente utilizar
import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
// Utilizando styled-components
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

// Lista de texto (array)
const icones = [perfil, sacola]
function IconesHeader() {
    return (
        // Exibindo as mensagnes dos ícones que foram importados
        < Icones>
        {
            icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))
        }
        </Icones >
    )
}

export default IconesHeader;

