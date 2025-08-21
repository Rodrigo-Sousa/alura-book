// Importação do arquivo CSS
import './App.css';
import Header from "./components/Header"

function App() {
  return (
    // Adicionado classes aos componentes para executar o CSS
    <div className='App'>
      {/* Utilizando o componente Header */}
      <Header />
    </div>
  );
}

export default App;
