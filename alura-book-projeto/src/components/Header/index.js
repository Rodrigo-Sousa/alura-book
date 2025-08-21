import "./estilo.css";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";

function Header(){
    return (
        <header className='App-header'>
        {/* Como não temos conteúdo dentro destas tags, elas possuem o 'auto fechamento' */}
        {/* Importando o componente Logo */}
        <Logo />
        {/* Importado a lista contendo as opções do Header */}
        <OpcoesHeader />
        <IconesHeader />
      </header>
    )
}

export default Header;