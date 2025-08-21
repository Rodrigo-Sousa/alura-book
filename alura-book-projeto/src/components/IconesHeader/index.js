import "./estilo.css";
// Importando as imagens para o componente utilizar
import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
// Lista de texto (array)
const icones = [perfil, sacola]
function IconesHeader() {
    return (
        // Exibindo as mensagnes dos ícones que foram importados
        < ul className = 'icones' >
        {
            icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            ))
        }
        </ul >
    )
}

export default IconesHeader;

