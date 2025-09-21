// Importando o Styled-components
import styled from "styled-components";
// Utilizando o useState e useEffect
import { useEffect, useState } from "react";
// Importanto a função do serviço
import { deleteFavorito, getFavoritos } from "../services/favoritos";
// Importando a imagem dos livros
import livroImg from "../images/AlgoritmosEmJavaScript.png"
// Utilizando a stilização do styled-components. Pacote que "guarda os estilos"
const AppContainer = styled.div`
  /* Largura e altura em 100 */
    width: 100vw;
    height: 100vh;
  /* Cor de fundo */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  `
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  // Trabalhando com useState(), para salvar os livros favoritos
  const [favoritos, setFavoritos] = useState([]);

  // UseEffect consome api's de forma assíncronas, para isso, precisamos utilizar uma outra função, com o async await.
  async function fetchFavoritos() {

    const favoritosDaApi = await getFavoritos();
    // Passando o conteúdo que recebe da API
    setFavoritos(favoritosDaApi);

  }

  // Função para deletar o livro da página favoritos (em consequência do arquivos JSON no backend.)
  async function deletarFavorito(id){
    // Após receber o id, irá chamar a função do serviço, para deletar o objeto
    await deleteFavorito(id);
    // Após deletar, irá recarregar a página, para exibir a lista 'atual' dos livros favoritos.
    await fetchFavoritos();
    // Mensagem que a exclusão foi feita com sucesso. 
    alert(`Livro de id: ${id} foi deletado com sucesso!`);
  }
  // Após criar o estado de favoritos (useState), vamos inserir valores nele, com o useEffect
  useEffect(() => {
    // Função que utilizamos para setar o estado dos livros favoritos
    fetchFavoritos();
  }, [])
  return (
    // Utilizando o componente estilizado
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos: </Titulo>
        <ResultadoContainer>
          {/* Inserindo dados JavaScript */}
          {
            // Exibindo na tela, o conteúdo com o método map(), para criar um novo array.
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado onClick={() => deletarFavorito(favorito.id)}>
              {/* Recebendo o conteúdo do favorito, exibindo o nome do livro */}
                <p>{favorito.nome}</p>
                <img src={livroImg}/>
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
