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

      </header>
    </div>
  );
}

export default App;
