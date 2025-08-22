import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";

// Utilizando styled-components
import styled from "styled-components"

// Container do header, possuindo a estilização junto do pacote styled-components
const HeaderContainer = styled.header`
/* Estilizando o header que será exibido na página */
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
        {/* Como não temos conteúdo dentro destas tags, elas possuem o 'auto fechamento' */}
        {/* Importando o componente Logo */}
        <Logo />
        {/* Importado a lista contendo as opções do Header */}
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
    )
}

export default Header;