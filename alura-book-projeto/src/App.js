// Importação do arquivo CSS
import './App.css';
import Logo from "./components/Logo"
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'
// Lista de texto (array)
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola]

function App() {
  return (
    // Adicionado classes aos componentes para executar o CSS
    <div className='App'>
      <header className='App-header'>
        {/* Importando o componente Logo */}
        <Logo></Logo>
        {/* Adicionando as opções do menu */}
        <ul className='opcoes'>
          {/* Varrendo o array e retornando um novo array no lugar, otimizando o código */}
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
          {/* Exibindo as mensagnes dos ícones que foram importados */}
        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
