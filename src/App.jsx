import { useRef, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [produtos, setProdutos] = useState([]);
  const teste = useRef();

  function clicou() {
    const novoProdutoNome = teste.current.value.trim(); // Remova os espaços em branco do início e do fim
    if (novoProdutoNome !== "") { // Verifique se o campo não está vazio
      setProdutos([{ id: v4(), nome: novoProdutoNome }, ...produtos]);
      teste.current.value = "";
    } else {
      alert("Por favor, insira um nome de produto válido.");
    }
  }

  function deletar(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  return (
    <>
      <div className="apliction">
        <h1>Lista de Compras</h1>
        <input type="text" name="" id="" placeholder="Produto..." ref={teste} />
        <button onClick={clicou} className="bot">
          Adicionar
        </button>

        <div className="lista-produtos">
          {produtos.map((produto) => (
            <div className="product" key={produto.id}>
              <p id="prg">{produto.nome}</p>
              <button id="btn" onClick={() => deletar(produto.id)}>❌</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="rodape"><strong>©2024 DESENVOLVIDO POR <span>UBERDAN ALMEIDA</span></strong>
        <p id="logo">
          <a href="https://www.linkedin.com/in/uberdan-almeida-8a1a08223/">
          <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="linkedin-uberdan"/>
          </a>
          <a href="https://github.com/Uberdanalmeida">
          <img src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="github-uberdan"/>
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
