// Importação do arquivo CSS
import './App.css';
import Logo from "./components/Logo"

function App() {
  return (
    // Adicionado classes aos componentes para executar o CSS
    <div className='App'>
      <header className='App-header'>
        {/* Importando o componente Logo */}
        <Logo></Logo>
        {/* Adicionando as opções do menu */}
        <ul>
          <li><p>CATEGORIAS</p></li>
          <li><p>MINHA ESTANTE</p></li>
          <li><p>FAVORITOS</p></li>
        </ul>

      </header>
    </div>
  );
}

export default App;
