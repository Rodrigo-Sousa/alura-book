// Importando o Styled-components
import styled from "styled-components";

// Importando o componente de Pesquisa
import Pesquisa from "../components/Pesquisa";

// Utilizando a stilização do styled-components. Pacote que "guarda os estilos"
const AppContainer = styled.div`
  /* Largura e altura em 100 */
    width: 100vw;
    height: 100vh;
  /* Cor de fundo */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  /* Estilizando todos os li da página */

  `

function Favoritos() {
  return (
    // Utilizando o componente estilizado
    <AppContainer>
      {/* Sessão de pesquisa */}
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
