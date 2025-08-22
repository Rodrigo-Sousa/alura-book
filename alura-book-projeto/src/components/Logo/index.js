import logo from "../../images/logo.svg"

// Importando styled-components
import styled from "styled-components";

const LogoContainer = styled.div`
  /* Disponibilizando o texto na horizontal */
  display: flex;
  /* Aumentando o tamanho da fonte */
  font-size: 30px;
  `
const LogoImage = styled.img`
    margin-right: 10px;
`  

function Logo(){
    return(
        <LogoContainer>
            <LogoImage 
            src={logo}
            alt='logo'
        />
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}
export default Logo;