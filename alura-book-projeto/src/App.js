import Header from "./components/Header"
// Importando o Styled-components
import styled from "styled-components"

// Utilizando a stilização do styled-components. Pacote que "guarda os estilos"
const AppContainer = styled.div`
    /* Largura e altura em 100 */
    width: 100vw;
    height: 100vh;
    /* Cor de fundo */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
/* Estilizando todos os li da página */
li {
  list-style: none;
}
  `

function App() {
  return (
    // Adicionado classes aos componentes para executar o CSS
    <AppContainer>
      {/* Utilizando o componente Header */}
      <Header />
    </AppContainer>
  );
}

export default App;
