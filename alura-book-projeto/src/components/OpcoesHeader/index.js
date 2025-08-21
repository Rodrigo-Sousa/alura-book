import "./estilo.css";

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
function OpcoesHeader(){
    return (
        //Adicionando as opções do menu
        <ul className='opcoes'>
          {/* Varrendo o array e retornando um novo array no lugar, otimizando o código */}
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
    )
}

export default OpcoesHeader;  