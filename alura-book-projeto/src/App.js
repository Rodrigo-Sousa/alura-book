// Importação do arquivo CSS
import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    // Adicionado classes aos componentes para executar o CSS
    <div className='App'>
      <header className='App-header'>
        <logo className='logo'>
          <img src={logo} alt='Um símbolo de um triângulo laranja, representando a letra A da marca: Alura Book'></img>
          <p><strong>Alura</strong> Books</p>
        </logo>

      </header>
    </div>
  );
}

export default App;
